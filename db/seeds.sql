USE employee_db;

INSERT INTO department (name)
VALUES
    ("Management"),
    ("Housekeeping"),
    ("Front Desk"),
    ("Maintenance"),
    ("Food & Beverage"),
    ("Sales"),
    ("Marketing"),
    ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Hotel Manager", 200000, 1),
    ("Housekeeping Manager", 100000, 2),
    ("Housekeeper", 60000, 2),
    ("Front Desk Manager", 100000, 3),
    ("Front Desk Clerk", 60000, 3),
    ("Maintenance Manager", 100000, 4),
    ("Maintenance Worker", 80000, 4),
    ("Food & Beverage Manager", 100000, 5),
    ("Bartender", 80000, 5),
    ("Waiter/Waitress", 60000, 5),
    ("Sales Manager", 150000, 6),
    ("Sales Associate", 80000, 6),
    ("Marketing Manager", 150000, 7),
    ("Marketing Associate", 120000, 7),
    ("Controller", 150000, 8),
    ("Accountant", 100000, 8);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Philip J", "Fry", 1, NULL),
    ("Leela", "Turanga", 2, 1),
    ("Bender", "Rodriguez", 3, 1),
    ("Bart", "Simpson", 4, 1),
    ("Butters", "Stotch", 5, 1),
    ("Eric", "Cartman", 6, 1),
    ("Wes", "Anderson", 7, 1),
    ("Quentin", "Tarantino", 8, 1),
    ("Martin", "Scorsese", 9, 1),
    ("Frank", "Smith", 10, 1),
    ("Sally", "Johnson", 11, 1),
    ("George", "Washington", 12, 1),
    ("John F", "Kennedy", 13, 1),
    ("Khaleesi", "Targaryen", 14, 1),
    ("Gol D.", "Roger", 15, 1);
