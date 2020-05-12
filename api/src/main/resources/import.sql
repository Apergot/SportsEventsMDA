INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('SilentStorm', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Alejandro', 'Perdomo', 'someone@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('admin', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1,'Alejandro', 'Perdomo', 'admin@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('Hawk', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Diego', 'Hawkins', 'hawk@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('OKai', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Miguel', 'Berciano', 'okai@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('JuanKevinTR', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Juan Kevin', 'Trujillo', 'juankevin@mail.xd');

INSERT INTO rivalries (rivalryname, location, capacity, date_, description) VALUES ('Torneo de Ciclismo', 'Las palmas de GC', 12000, '2020-05-10', 'Competición de ciclismo');
INSERT INTO rivalries (rivalryname, location, capacity, date_, description) VALUES ('Torneo de Atletismo', 'Tafira Alta', 4500, '2020-05-20', 'Competición de atletismo');
INSERT INTO rivalries (rivalryname, location, capacity, date_, description) VALUES ('Torneo de Baloncesto', 'Telde', 8000, '2020-05-20', 'Competición de baloncesto');
INSERT INTO rivalries (rivalryname, location, capacity, date_, description) VALUES ('Torneo de Halterofilia', 'Arucas', 5000, '2020-05-20', 'Competición de halterofilia');
INSERT INTO rivalries (rivalryname, location, capacity, date_, description) VALUES ('Torneo de Patinaje', 'Gáldar', 1200, '2020-05-20', 'Competición de patinaje');

INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');

INSERT INTO users_roles (user_id, roles_id) VALUES (1,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (3,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (4,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (5,1);

INSERT INTO users_roles (user_id, roles_id) VALUES (2,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (2,2);
