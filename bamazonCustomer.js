var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "bamazon"
})

connection.connect(function(err){
  showInv();
})

var showInv = function(){
  connection.query("SELECT * FROM products", function(err,res){
    for (var i=0; i<res.length;i++){ 
    console.log(res[i].item_id + " - " + res[i].product_name + " - $" + res[i].price)}
    purchase();
  });
}

var purchase = function(){
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What is the ID of the item you wish to purchase?"
  },
  {
    name: "quantity",
    type: "input",
    message: "How many would you like to purchase?"
  }]).then(function(answer){
    connection.query("SELECT * FROM products", function(err,res){
    for (var i=0; i<res.length;i++){
      if (res[i].item_id == answer.item){
        var chosenItem = res[i];
        if (chosenItem.stock_quantity >= answer.quantity){
          var newQuantity = chosenItem.stock_quantity - answer.quantity;
          connection.query("UPDATE products SET ? WHERE ?",[{
            stock_quantity: newQuantity
          },{
            item_id: chosenItem.item_id
          }], function(err,res){
            console.log("Nice choice! And we have it in stock!");
            console.log("Your total is $" + chosenItem.price*answer.quantity) + ". Thanks for the sale!";
          })
        }
        else{
          console.log("Sorry, we don't have enough stock to fill your order.  Please try again.");
          purchase();
        }
      }
    }
    })
  })
}