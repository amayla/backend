use latihan_jc10;

select  * from users
join cart on users.username = cart.pemilik;

-- cari data yang parameternya bukan..
select * from users where  not  role =  'admin' ;
insert into users  values (0,'user', 'seto', 'seto@mail.com');

update users set username = 'naruto' where id=4;

delete from users where role = 'user' or role = 'admin';

-- cari data yang parameternya dalam satu field
select * from users where role in ( 'admin' , 'ninja');



-- BELAJAR SUB QUERY



select  * from users;

-- axios.get(endpoint,{params: {username : 'admin', password: 'password' }});
-- axios.get(endpoint?username=admin&password=password);


use authentication_test;