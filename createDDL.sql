CREATE TABLE memos (
    id SERIAL,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(255) NOT NULL,
    color INTEGER DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    version INTEGER,
    PRIMARY KEY (id)
);