DROP TABLE IF EXISTS assets;

CREATE TABLE assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    img_url TEXT NOT NULL,
    token_id TEXT NOT NULL
);