var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "bamazon"
})

inquirer.prompt([

  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
  }

]).then(function(user) {

  switch(user.action) {
    case "View Products for Sale":
      viewProducts();
      break;
    case "View Low Inventory":
      viewLow();
      break;
    case "Add to Inventory":
      addInv();
      break;
    case "Add New Product":
      addProd();
      break;
  }
})  

function viewProducts(){
  connection.query("SELECT * FROM products", function(err,res){
    console.log(res)
  });
}

function viewLow(){
  connection.query("SELECT * FROM products", function(err,res){
    for (var i=0; i<res.length; i++){
      if (res[i].stock_quantity < 5){
        console.log(res[i].product_name)
      }
    }
  })
}

function addInv(){
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What is the ID of the item to which you wish to add inventory?"
  },
  {
    name: "quantity",
    type: "input",
    message: "How many would you like to add?"
  }]).then(function(answer){
    connection.query("UPDATE products SET ? WHERE ?",[{
  //RAN OUT OF TIME, BUT WOULD UPDATE THE TABLE WITH THE NEW QUANTITY      
    }]
    )})}

function addProd(){
  //RAN OUT OF TIME, BUT WOULD USE INQUIRER FOR PROMPTS AND ADD THE NEW ITEM INFO TO THE TABLE WITH "INSERT INTO"
}