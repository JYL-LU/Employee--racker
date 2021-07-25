
INSERT INTO departments (name)
VALUES 
("Accounting"),
("Marketing"),
("HR"),
("IT"),
("Business Development");

INSERT INTO roles (title, salary, department_id)
VALUES
("Accountant", 90000, 1),
("Marketing analyst", 80000, 2),
("HR manager", 10000, 3),
("Engineer", 12000, 4),
("Representatives", 90000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Black", "Widow", 1, 123),
("Iron", "Man", 2, 456),
("Captain", "America", 3, 789),
("Doctor", "Strange", 4, 234),
("Green", "Hulk", 5, 345),


