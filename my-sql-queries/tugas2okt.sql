use todo_JC10;
select * from todo;
select * from users;
delete from todo where id=9;

select * from todo
join users on users.userId = todo.userId;

use ecommerce_JC10;
select * from users;
select * from API;
select * from API where username = 'admin';

use fpaal;
select * from users;
select * from products;


use authentication_test;
select * from users;

use bukatoko_api;
select * from users;

use fpaal;
select * from users;

use hoki_bento;

use 1oct;
select * from pictable;

select * from kelas;
select * from users;
select * from conn_user_kelas;

use latihan_ujian;

select * from users
join users on users.id=kelas.id_users;

select id_user,id_kelas from conn_user_kelas;


-- show username dengan kelas-kelas yang diambil-- 
select username, nama as nama_kelas from conn_user_kelas
join users on users.id = conn_user_kelas.id_user
join kelas on kelas.id = conn_user_kelas.id_kelas;


-- hitung jumlah murid berdasarkan kelas
select nama as nama_kelas, 
count(id_user) as jumlah_murid from conn_user_kelas
join kelas on kelas.id = conn_user_kelas.id_kelas
group by id_kelas;

-- list murid dan kelas yang diikuti
select username as nama_murid, 
count(id_user) as jumlah_kelas_yang_diikuti from conn_user_kelas
join users on users.id = conn_user_kelas.id_user
group by id_user;


select username, 
nama as nama_kelas from conn_user_kelas 
join users on users.id = conn_user_kelas.id_user
join kelas on kelas.id = conn_user_kelas.id_kelas;

-- no.1
Select username nama from conn_user_kelas c
Join users u on u.id=id_user
Join kelas k on k.id = id_kelas;
-- where username = 'fikri'

-- no.3

select username, count (nama) from conn_user_kelas c
Join users u on u.id=id_user
Join kelas k on k.id = id_kelas
-- where username = 'seto'
group by username;

-- no.2

select count(*) as total_students,nama, id_kelas from conn_user_kelas c
join users u on u.id=id_user
join kelas k on k.id = id_kelas
group by nama, id_kelas;



-- no 4

SELECT 
    username
FROM
    conn_user_kelas
        JOIN
    users u ON u.id = id_user
        JOIN
    kelas k ON k.id = id_kelas
WHERE
    id_kelas = (SELECT 
            id_kelas
        FROM
            conn_user_kelas conn_user_kelas
                JOIN
            users u ON u.id = id_user
                JOIN
            kelas k ON k.id = id_kelas
        GROUP BY id_kelas
        ORDER BY COUNT(*) DESC
        LIMIT 1);




-- no 5
SELECT 
    COUNT(*) AS total_students, nama, id_kelas
FROM
    conn_user_kelas c
        JOIN
    users u ON u.id = id_user
        JOIN
    kelas k ON k.id = id_kelas
GROUP BY nama , id_kelas
HAVING COUNT(*) > (SELECT 
        AVG(total)
    FROM
        (SELECT 
            COUNT(username) AS total, id_kelas
        FROM
            conn_user_kelas c
        JOIN users u ON u.id = id_user
        JOIN kelas k ON k.id = id_kelas
        GROUP BY nama , id_kelas) a);

