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
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", "170000", "1");
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Director", "124000", "2");
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager", "95000", "3");
INSERT INTO role (title, salary, department_id)
VALUES ("Financial Analyst", "150000", "4");

-- Employees
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Leeroy", "Jenkins", "1");
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ella", "Vader", "2");
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Levy", "Tate", "3");
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Olive", "Garden", "4");
-- INSERT INTO colleges (name)
-- VALUES ("Boston College");

-- INSERT INTO colleges (name)
-- VALUES ("Harvard");

/* OR */
-- INSERT INTO colleges (name)
-- VALUES ("Emerson"), ("Northeastern"), ("MIT");