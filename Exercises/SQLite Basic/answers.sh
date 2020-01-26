
 select name from students;

 select * from students where age>30

 select name from students where age=30 and Gender like "F"

 select Points from students  where Name like "Alex"

 INSERT INTO  students ('Name','Age','Gender','Points') VALUES( 'Akram',   30 ,'F',3500)

 update students set Points = 450 where Name like 'Basma'

 update students set Points = 5 where Name like 'Alex'


                         "-- Create table "
 create table graduates (
 ID  Integer Not Null Primary key autoincrement,
Name Text Not Null Unique,
Age Integer,
Gender Text,
Points Integer,
Graduation date

)


INSERT INTO graduates (Name,Age,Gender,Points) VALUES ((SELECT Name FROM students where Name = "Layal"),(SELECT Age FROM students where Name = "Layal"),(SELECT Gender FROM students where Name = "Layal"),(SELECT Points FROM students where Name = "Layal"))

UPDATE graduates SET Graduation = "16-1-2020" WHERE Name = "Layal"

DELETE FROM students WHERE Name like 'Layal';


                                   " -- Joins"

 select employees.Name,employees.Company,companies.Date from employees INNER Join companies on employees.Company = companies.Name

select employees.Name from employees INNER Join companies on employees.Company = companies.Name 
where companies.Date <2000

select employees.Company from employees INNER Join companies on employees.Company = companies.Name 
where Role='Graphic Designer'


                                       "-- Count & Filter"
    
    select Name From students where Points =(select Max(Points) from students)
   
    select avg(Points) from students
 
    select count(*) from students where Points=500
    
    select Name from students where Name like  '%S%' 
                           
    select Name from students  ORDER BY Points DESC;  

    
