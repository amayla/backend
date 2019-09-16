use latihan_jc10;

select  * from users
join cart on users.username =cart.pemilik;

select * from users;
insert into users (role, username,email) values ('user', 'seto', 'seto@mail.com');

update users set username = 'naruto' where id=4;

delete from users where role = 'user' or role = 'admin'

-- axios.get(endpoint,{params: {username : 'admin', password: 'password' }});
-- axios.get(endpoint?username=admin&password=password);


