INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('SilentStorm', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Alejandro', 'Perdomo', 'apergot95@gmail.com');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('admin', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1,'Alejandro', 'Perdomo', 'admin@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('Hawk', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Diego', 'Hawkins', 'hawk@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('OKai', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Miguel', 'Berciano', 'okai@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('JuanKevinTR', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Juan Kevin', 'Trujillo', 'juankevin@mail.xd');

INSERT INTO rivalries (rivalryname, location, capacity, rivalrydate, description, enrolled) VALUES ('Torneo de Ciclismo', 'Las palmas de GC', 100, '2020-05-10', 'Competición de ciclismo',0);
INSERT INTO rivalries (rivalryname, location, capacity, rivalrydate, description, enrolled) VALUES ('Torneo de Atletismo', 'Tafira Alta', 50, '2020-05-20', 'Competición de atletismo',0);
INSERT INTO rivalries (rivalryname, location, capacity, rivalrydate, description, enrolled) VALUES ('Torneo de Baloncesto', 'Telde', 35, '2020-05-20', 'Competición de baloncesto',0);
INSERT INTO rivalries (rivalryname, location, capacity, rivalrydate, description, enrolled) VALUES ('Torneo de Halterofilia', 'Arucas', 150, '2020-05-20', 'Competición de halterofilia',0);
INSERT INTO rivalries (rivalryname, location, capacity, rivalrydate, description, enrolled) VALUES ('Torneo de Patinaje', 'Gáldar', 600, '2020-05-20', 'Competición de patinaje',0);

INSERT INTO enrollments (rivalry_id, user_id, state, enrollment_date) VALUES (1, 3, 'ENABLED', '2020-05-20');

INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');

INSERT INTO users_roles (user_id, roles_id) VALUES (1,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (3,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (4,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (5,1);

INSERT INTO users_roles (user_id, roles_id) VALUES (2,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (2,2);
