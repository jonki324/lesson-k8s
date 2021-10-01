package com.example.services;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;
import com.example.entities.Memo;
import com.example.repositories.MemoRepository;

@RequestScoped
public class MemoService {

    @Inject
    MemoRepository memoRepository;

    public Memo get(Long id) {
        return memoRepository.findByIdOptional(id)
                .orElseThrow(() -> new WebApplicationException(Status.NOT_FOUND));
    }

    public List<Memo> getAll() {
        return memoRepository.listAll();
    }

    @Transactional
    public Memo create(Memo memo) {
        memoRepository.persistAndFlush(memo);
        return memo;
    }

    @Transactional
    public Memo update(Memo memo) {
        var target = memoRepository.findByIdOptional(memo.getId())
                .orElseThrow(() -> new WebApplicationException(Status.NOT_FOUND));
        target.setTitle(memo.getTitle());
        target.setBody(memo.getBody());
        target.setColor(memo.getColor());
        target.setVersion(memo.getVersion());
        memoRepository.persistAndFlush(target);
        return target;
    }

    @Transactional
    public void delete(Memo memo) {
        var target = memoRepository.findByIdOptional(memo.getId())
                .orElseThrow(() -> new WebApplicationException(Status.NOT_FOUND));
        target.setVersion(memo.getVersion());
        memoRepository.delete(target);
    }
}
