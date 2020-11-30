/* Seeds for SQL table. We haven't discussed this type of file yet */
USE employeetracker_db;

-- Departments
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Finance");

-- Roles


-- Employees
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Leeroy", "Jenkins", "null");

-- INSERT INTO colleges (name)
-- VALUES ("Boston College");

-- INSERT INTO colleges (name)
-- VALUES ("Harvard");

/* OR */
-- INSERT INTO colleges (name)
-- VALUES ("Emerson"), ("Northeastern"), ("MIT");