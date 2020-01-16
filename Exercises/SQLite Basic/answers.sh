--(1)
 select name from students;
--(2)
 select * from students where age>30
--(3)
 select name from students where age>30 and Gender like "F"
--(4)
 select Points from students  where Name like "Alex"
--(5)
 INSERT INTO  students ('Name','Age','Gender','Points') VALUES( 'Akram',   30 ,'F',3500)
--(6)
 update students set Points = 450 where Name like 'Basma'
--(7)
 update students set Points = 5 where Name like 'Alex'
