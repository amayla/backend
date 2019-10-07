use query_practice;
select * from locations;
select * from employees; 
select * from departments;
select * from countries;
select * from  regions;
select * from  jobs;
select * from  job_history;

-- cari f name l name dan gaji karyawan yang gajinya lebihbesar dr karyawan yg nama belakangnya bull
select first_name,last_name,salary from employees 
where salary > (select salary from employees where last_name = 'BULL');

-- cari f name l name dan gaji karyawan yang gajinya lebihbesar dr gaji rata rata
select first_name,last_name,salary from employees 
where salary > (select avg(salary) from employees);

-- cari fname dan lname dimana rolenya sebagai manager
select first_name,last_name from employees 
where  employee_id in ( select manager_id from employees);

select first_name, last_name from employees
where department_id in
(select department_id from departments where department_name in ('IT','IT Support', 'IT Helpdesk'));

select first_name,last_name from employees 
where department_id in (select  department_id from employees where department_id= 60 or department_id=230);

select first_name,last_name from employees 
where manager_id in (select employee_id from employees where department_id
in (select department_id from departments where location_id
in( select location_id from locations where country_id="US")));

use todo_jc10;
select * from todo;

select * from users;

-- cari data todo yang dimiliki oleh username selain premium
select * from todo where userId in (select id from users where not role ='premium');

-- cari data todo yang dimiliki oleh user yang memiliki role premium
select * from todo where userId in (select id from users where not role ='premium');

-- cari data doto yang dimiliki oleh user dengan nama seto dan naruto
select * from todo where userId in (select id from users where username='seto' or username='naruto');




-- load schema
use titanic_jc10;

-- select all data (*) from a table in your schema
select * from train;

-- select data where the passenger sex = male 
select * from train where Sex = 'male';


-- select data where the passenger age <20
 select * from train where Age <20;
 
-- select data where Pclass only 2 or 3
select * from train where Pclass in (2,3);

-- select data where sex is male and age<20
select * from train where Sex = 'male' and Age<20;

-- select data where there are survivors
select * from train where Survived > 0;

-- manipulate data column from passengerID to id 
select PassengerId as Id, Name from train;

-- display passenger by Pclass
select count(*) as jumlah, Pclass from train group by Pclass order by Pclass;

-- display jumlah passenger yang selamat berdasarkan Pclass
select count(*) as jumlah, Survived, Pclass from train where Survived = 1 group by Survived, Pclass order by Survived;

select count(*) as jumlah, PassengerId from train group by PassengerId;

-- display penumpang by ID 20 pertama
select * from train order by PassengerId limit 20 ;

-- display 10 data dengan skip 10 data pertama
select * from train limit 10 offset 10;

select sum(Age) from train;


use latihan_jc10;

select * from users
join cart on users.id = cart.userId;

select * from users
join cart on users.username = cart.pemilik;


select * from cart
join users on cart.userId = users.id;


-- TITANIC
-- load schema
use titanic_jc10;

-- select all data (*) from a table in your schema
select * from train;

-- select data where the passenger sex = male 
select * from train where Sex = 'male';


-- select data where the passenger age <20
 select * from train where Age <20;
 
-- select data where Pclass only 2 or 3
select * from train where Pclass in (2,3);

-- select data where sex is male and age<20
select * from train where Sex = 'male' and Age<20;

-- select data where there are survivors
select * from train where Survived > 0;

-- manipulate data column from passengerID to id 
select PassengerId as Id, Name from train;

-- display passenger by Pclass
select count(*) as jumlah, Pclass from train group by Pclass order by Pclass;

-- display jumlah passenger yang selamat berdasarkan Pclass
select count(*) as jumlah, Survived, Pclass from train where Survived = 1 group by Survived, Pclass order by Survived;

select count(*) as jumlah, PassengerId from train group by PassengerId;

-- display penumpang by ID 20 pertama
select * from train order by PassengerId limit 20 ;

-- display 10 data dengan skip 10 data pertama
select * from train limit 10 offset 10;

select sum(Age) from train;



