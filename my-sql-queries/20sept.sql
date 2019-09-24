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

select first_name, last_name
from employees
where department_id IN
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


use fpaal;
select * from users;