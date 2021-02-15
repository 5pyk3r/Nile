# Nile - e-commerce app with electronics. 
### Nile made with Angular 11 and Spring
 
## Technology stack
|   Component   |   Technology  |
| ------------- | ------------- |
| Frontend      |   Angular 11  |
| Backend       |   Spring 5    |
| In Memory DB	 |     H2        |
| Images store  |     AWS S3    |

## Requirements to run the application

  - Java 14
  - Angular CLI: 10.1.3 or above
  - Node: 12.18.3 or above
  - npm: 6.14.7 or above
  
## About
  Nile is e-commerce project. Users are divided by roles. Each user has a role assigned functionality
  
   User role:
   - login and register user
   - user panel with history of orders(in the process)
   - user can: add product to cart, checkout order, order product 
   - view products 
   - filter products by category
   - view products details with description etc. (in the process)
   
   Admin role:
   - adding, editing, delete product in specific category
   - adding, editing, delete category
   
 ## Application development ideas
   Still a lot to do in project in the near future:
   
   - search engine with e.g: ElasticSearch on toolbar
   - clients comments and rating(0-5 stars) under product that client ordered
   - pagination
   - gallery with slider of some products on main page with managment on admin 
   - better UI 
   - user panel with more functionality like: setting, change password, address, e-mail, etc.
   - AWS based e-mail sender when: user register, password changing(with some tokenization),  email user when he order products and receive products
   - Host full app(frontend, backend, db) on AWS 
   - statistics of sale on admin page(charts)
  
     
### Home Page
![Home page]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/home.PNG)
### Cart
![Cart]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/cart.PNG)
### Admin panel - category list
![Admin panel]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/admin-category-list.PNG)
### Admin panel - products list
![Admin panel]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/admin-products-list.PNG)
### Swagger API visualization
![Products]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/swagger-products.PNG)
![Orders]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/orders-swagger.PNG)
![Categories]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/category.PNG)
![Other endpoints]( https://raw.githubusercontent.com/5pyk3r/Nile/master/screenshots/swagger.PNG)




