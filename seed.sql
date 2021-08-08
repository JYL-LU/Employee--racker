DELETE FROM departments;

DELETE FROM roles;

DELETE FROM employees;

INSERT INTO departments (id,name)
VALUES 
(1,"Accounting"),
(2,"Marketing"),
(3,"HR"),
(4,"IT"),
(5,"Business Development");

INSERT INTO roles (id,title, salary, department_id)
VALUES
(1,"Accountant", 90000, 1),
(2,"Marketing analyst", 80000, 2),
(3,"HR manager", 10000, 3),
(4,"Engineer", 12000, 4),
(5,"Representatives", 90000, 5);

INSERT INTO employees (id,first_name, last_name, role_id, manager_id)
VALUES 
(1,"Black", "Widow", 1,NULL),
(2,"Iron", "Man", 1, NULL),
(3,"Captain", "America", 4, NULL),
(4,"Doctor", "Strange", 4, NULL),
(5,"Green", "Hulk", 2, NUll);

UPDATE employees SET manager_id = 1 WHERE id = 2;
UPDATE employees SET manager_id = 1 WHERE id = 4;