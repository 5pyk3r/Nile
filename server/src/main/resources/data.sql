insert into Role (name) values ('ROLE_ADMIN');
insert into Role (name) values ('ROLE_USER');
insert into address(city, street) values('Wrocław', 'Kochanowskie 27a/6');

insert into user (email, password, user_name, address_id) values ('admin@gmail.com',
'$2y$12$BBfJ4aSjpMTrWbKdXULBwuqRwrW9hDY57F28lHVS7bKCy3u/6PzBu', 'admin', 1);
insert into user_roles(user_id, role_id) values(1, 1);

insert  into category(name) values ('Smartphones');
insert  into category(name) values ('Smart devices');
insert  into category(name) values ('Accessories');
insert  into category(name) values ('Audio');
insert  into category(name) values ('Video');

insert into product(name, price, file_name, category_id) values('Xiaomi Mi 5S', 350, 'xiaomi.jpg', 1);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi 8', 750, 'mi-8.jpg', 1);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi 10', 749, 'mi-10.jpg', 1);

insert into product(name, price, file_name, category_id) values('Xiaomi Scooter', 799, 'scooter.jpg', 2);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi-router', 150, 'mi-router.jpg', 2);
insert into product(name, price, file_name, category_id) values('Xiaomi Vacuum', 499, 'vacuum.jpg', 2);

insert into product(name, price, file_name, category_id) values('Xiaomi Mi Induction Cooker', 350, 'mi-induction-cooker.jpg', 3);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Powerbank', 49, 'mi-powerbank.jpg', 3);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Smart-Kettle', 159, 'mi-smart-kettle.jpg', 3);

insert into product(name, price, file_name, category_id) values('Xiaomi Earphones', 20, 'earphones.jpg', 4);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Bluetooth Speaker', 49, 'mi-bluetooth-speaker.jpg', 4);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Pocket Speaker', 89, 'mi-pocket-speaker.jpg', 4);

insert into product(name, price, file_name, category_id) values('Xiaomi Mi Camera', 79, 'camera.jpg', 5);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Tv Q1', 799, 'mi-tv-q1.jpg', 5);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi TV', 499, 'tv.jpg', 5);
insert into product(name, price, file_name, category_id) values('Xiaomi Mi Monitor', 299, 'tv1.jpg', 5);


