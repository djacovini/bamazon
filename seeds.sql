USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("toothbrush", "personal care", 4.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("shaving cream", "personal care", 5.40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("mouthwash", "personal care", 6.00, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("headphones", "electronics", 99.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("bluetooth speaker", "electronics", 139.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("television", "electronics", 729.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("basketball", "sporting goods", 35.50, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("football", "sporting goods", 44.29, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("baseball", "sporting goods", 9.00, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("baseball bat", "sporting good", 149.50, 21);

SELECT * FROM products;