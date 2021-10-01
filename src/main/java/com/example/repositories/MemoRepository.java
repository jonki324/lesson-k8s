package com.example.repositories;

import javax.enterprise.context.ApplicationScoped;
import com.example.entities.Memo;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class MemoRepository implements PanacheRepository<Memo> {

}
