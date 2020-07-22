-- create tables
CREATE TABLE monsters(
    -- serial is a number that auto increments as we enter data
  id serial,
  name character varying(50),
  personality character varying(50)
);

CREATE TABLE habitats(
  id serial,
  name character varying(50),
  climate character varying(50),
  temperature int
);

-- relational table, a monster lives in habitat
-- A foreign key relationship could be one-to-one (a record in one table is linked to one and only one record in another table) 
-- or one-to-many (a record in one table is linked to multiple records in another table).
-- one to one, monster can live only in one habitat
CREATE TABLE lives(
  monster character varying(50),
  habitat character varying(50)
);

-- insert values
INSERT INTO monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');

-- references
-- CREATE TABLE dragon(
--   id             SERIAL PRIMARY KEY,
--   birthdate      TIMESTAMP NOT NULL,

--   -- name is sql keyword, therefore, nickname for name
--   -- VARCHAR(64) - Also known as Variable Character, string up to 64 characters 
--   nickname       VARCHAR(64),

--   -- by surrounding with double quotes, name of the column will be place exactly the same in pg database
  
--   "generationId" INTEGER,

--   -- FOREIGN KEY, connecting two tables together as 
--   -- one to many relation as generation can have multiple dragons / dragon belongs to many generations,
--   -- referencing 'generation table' as it's unique key/id
--   FOREIGN KEY ("generationId") REFERENCES generation(id)
-- );