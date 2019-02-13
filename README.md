# bamazon
Assignment for Week 12

### Overview
Welcome to bamazon, a command-line interface (CLI) node application for accessing a mySQL database of inventory!

bamazonCustomer.js allows a customer to view a menu of offerings and make a purchase of one item in multiple quantities.  The application will process the transaction, give a total amount due, and reduce inventory in the database.  If there isn't enough inventory to satisfy the order, the customer will be notified and asked to order again.

bamazonManager.js allows a manager to view a full inventory of offerings and to query a list of all items with low inventory (less than 5 in stock).
WIth future developments bamazonManager.js will also allow the user to increase inventory and add new products.

### How To Use
To access as a customer enter:
"node bamazonCustomer.js"
Prompts will guide you through a transaction.

To access as a manager enter:
"node bamazonManager.js"
Prompts will guide you through a review.

### Requirements
bamazon requires the user to install the following node packages:

  * [mysql](https://www.npmjs.com/package/mysql)
  * [Inquirer](https://www.npmjs.com/package/inquirer)


## Built With

  * [MySQL Workbench](https://www.mysql.com/products/workbench/)


## Author
* David Jacovini