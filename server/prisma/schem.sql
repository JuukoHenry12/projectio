CREATE TABLE "public"."Item" (
  id SERIAL PRIMARY KEY NOT NULL,
  details VARCHAR(255),
  item VARCHAR(255),
  quantity INTEGER  NOT NULL,
  price INTEGER  NOT NULL
)