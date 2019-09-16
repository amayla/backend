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







-- SELECT (COLUMNS) from NAMA_TABLE  