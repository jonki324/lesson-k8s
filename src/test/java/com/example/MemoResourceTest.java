package com.example;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.blankOrNullString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.TestMethodOrder;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;

@QuarkusTest
@TestMethodOrder(OrderAnnotation.class)
@TestInstance(Lifecycle.PER_CLASS)
public class MemoResourceTest {

    @PersistenceContext
    EntityManager em;

    @BeforeAll
    @Transactional
    public void beforeAll() {
        cleanup();
    }

    @AfterAll
    @Transactional
    public void afterAll() {
        cleanup();
    }

    private void cleanup() {
        var sql1 = "DELETE FROM memos";
        var query1 = em.createNativeQuery(sql1);
        query1.executeUpdate();

        var sql2 = "SELECT setval('memos_id_seq', 1, false)";
        var query2 = em.createNativeQuery(sql2);
        query2.getResultList();
    }

    @Test
    @Order(1)
    public void testCreate() {
        var json = Map.of("title", "memo01", "body", "memo body01", "color", "0");
        given().contentType(ContentType.JSON).body(json).when().post("/api/memos").then()
                .statusCode(201).body("id", not(blankOrNullString()));
    }

    @Test
    @Order(2)
    public void testGet() {
        given().contentType(ContentType.JSON).when().get("/api/memos/1").then().statusCode(200)
                .body("id", equalTo(1));
    }

    @Test
    @Order(3)
    public void testGetAll() {
        given().contentType(ContentType.JSON).when().get("/api/memos").then().statusCode(200)
                .body("size()", is(1));
    }

    @Test
    @Order(4)
    public void testUpdate() {
        var json = Map.of("id", "1", "title", "memo01upd", "body", "memo body01 upd", "color", "1",
                "version", "0");
        given().contentType(ContentType.JSON).body(json).when().put("/api/memos/1").then()
                .statusCode(200).body("title", equalTo("memo01upd"));
    }

    @Test
    @Order(5)
    public void testDelete() {
        var json = Map.of("id", "1", "title", "memo01upd", "body", "memo body01 upd", "color", "1",
                "version", "1");
        given().contentType(ContentType.JSON).body(json).when().delete("/api/memos/1").then()
                .statusCode(204);
    }
}
