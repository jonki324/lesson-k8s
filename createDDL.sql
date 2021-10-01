CREATE TABLE memos (
    id BIGSERIAL,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(255) NOT NULL,
    color INTEGER DEFAULT 0,
    version INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);