--(1)
 select name from students;
--(2)
 select * from students where age>30
--(3)
 select name from students where age=30 and Gender like "F"
--(4)
 select Points from students  where Name like "Alex"
--(5)
 INSERT INTO  students ('Name','Age','Gender','Points') VALUES( 'Akram',   30 ,'F',3500)
--(6)
 update students set Points = 450 where Name like 'Basma'
--(7)
 update students set Points = 5 where Name like 'Alex'


                         -- Create table 
 create table graduates (
 ID  Integer Not Null Primary key autoincrement,
Name Text Not Null Unique,
Age Integer,
Gender Text,
Points Integer,
Graduation date

)

--(1) 
INSERT INTO graduates (Name,Age,Gender,Points) VALUES ((SELECT Name FROM students where Name = "Layal"),(SELECT Age FROM students where Name = "Layal"),(SELECT Gender FROM students where Name = "Layal"),(SELECT Points FROM students where Name = "Layal"))
--(2)
UPDATE graduates SET Graduation = "16-1-2020" WHERE Name = "Layal"
--(3)
DELETE FROM students
WHERE Name like 'Layal';


                                    -- Joins
--(1)
 select employees.Name,employees.Company,companies.Date from employees INNER Join companies on employees.Company = companies.Name
--(2) 
select employees.Name from employees INNER Join companies on employees.Company = companies.Name 
where companies.Date <2000
--(3)
select employees.Company from employees INNER Join companies on employees.Company = companies.Name 
where Role='Graphic Designer'


                                       -- Count & Filter
 
