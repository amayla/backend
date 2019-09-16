use latihan_jc10;

select * from users
join cart on users.id = cart.userId;

select * from users
join cart on users.username = cart.pemilik;


select * from cart
join users on cart.userId = users.id;

select * from cart;

select * from users;