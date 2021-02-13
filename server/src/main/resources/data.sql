insert into Role (name) values ('ROLE_ADMIN');
insert into Role (name) values ('ROLE_USER');
insert into address(city, street) values('Wrocław', 'Kochanowskie 27a/6');

insert into user (email, password, user_name, address_id) values ('admin@gmail.com',
'$2y$12$BBfJ4aSjpMTrWbKdXULBwuqRwrW9hDY57F28lHVS7bKCy3u/6PzBu', 'admin', 1);
insert into user_roles(user_id, role_id) values(1, 1);

insert  into category(name) values ('Smartphones');
insert  into category(name) values ('Smart devices');

insert into product(name, price, file_name, category_id) values('Xiaomi Mi 5S', 750, 'xiaomi.jpg', 1);
insert into product(name, price, file_name, category_id) values('Xiaomi hulajnoga', 2500, 'scooter.jpg', 2);
