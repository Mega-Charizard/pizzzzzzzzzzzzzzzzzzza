menu_list_array =
[
    "Cheese_Pizza",
    "Veggie_Pizza",
    "Pepperoni_Pizza",
    "Meat_Pizza",
    "Margherita_Pizza",
    "Hawaiian_Pizza"
];

name_of_topping_array = [];


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;


}

function add_top(){
//Complete the code
}

function garlic()
{
     var garlic = document.getElementById("garlic").value;

     garlic.push(name_of_topping_array);

     console.log(garlic);

     document.getElementById("display_topping").innerHTML = garlic;

}
