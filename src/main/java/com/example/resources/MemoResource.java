package com.example.resources;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import com.example.entities.Memo;
import com.example.services.MemoService;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

@RequestScoped
@Path("/memos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class MemoResource {

    @Inject
    MemoService memoService;

    @Path("/{id}")
    @GET
    public Memo get(@PathParam("id") Long id) {
        return memoService.get(id);
    }

    @GET
    public List<Memo> getAll() {
        return memoService.getAll();
    }

    @POST
    @APIResponse(responseCode = "201", description = "created",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Memo.class)))
    public Response create(Memo memo) {
        var result = memoService.create(memo);
        return Response.status(Status.CREATED).entity(result).build();
    }

    @Path("/{id}")
    @PUT
    @APIResponse(responseCode = "200", description = "updated",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Memo.class)))
    public Response update(@PathParam("id") Long id, Memo memo) {
        memo.setId(id);
        var result = memoService.update(memo);
        return Response.status(Status.OK).entity(result).build();
    }

    @Path("/{id}")
    @DELETE
    @APIResponse(responseCode = "204", description = "deleted")
    public Response delete(@PathParam("id") Long id, Memo memo) {
        memo.setId(id);
        memoService.delete(memo);
        return Response.status(Status.NO_CONTENT).build();
    }
}
