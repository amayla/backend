use hoki_bento;

select * from transaction;
select * from transactionitem;
select * from product;
select * from cart;

select * from transactionitem where productId = 2;

select * from transactionitem where productId = 3;

select * from transactionItem
join transaction t on t.id = transactionItem.transactionId
where productId = 2;

select sum(qty) as totalQty from transactionitem where productId = 2;

select count(*) as totalTransaksi, sum(totalHarga) as jumlahHarga , namaPembeli
from transaction group by namaPembeli;

select namaPembeli, nama as NamaProduct, sum(qty) as TotalQty, count (namaPembeli) as TotalTransaksi
from transactionItem ti
join transaction t on ti.transactionId = t.id
join product p on p.id = ti.productId
where nama = 'Paket Bento B'
group by namaPembeli
order by TotalQty Desc;

select sum(qty) as totalQty, productId
from transactionitem group by productId;








