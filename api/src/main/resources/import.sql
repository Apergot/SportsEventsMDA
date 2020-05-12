INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('SilentStorm', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Alejandro', 'Perdomo', 'someone@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('admin', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1,'Alejandro', 'Perdomo', 'admin@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('Hawk', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Diego', 'Hawkins', 'hawk@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('OKai', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Miguel', 'Berciano', 'okai@mail.xd');
INSERT INTO users (username, password, enabled, firstname, lastname, email) VALUES ('JuanKevinTR', '$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy', 1, 'Juan Kevin', 'Trujillo', 'juankevin@mail.xd');

INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');

INSERT INTO users_roles (user_id, roles_id) VALUES (1,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (3,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (4,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (5,1);

INSERT INTO users_roles (user_id, roles_id) VALUES (2,1);
INSERT INTO users_roles (user_id, roles_id) VALUES (2,2);
