menu_list_array = ["Farmhouse", "Margherita", "Veg Supreme Pizza", "Veg extravaganza", "Veggie Feast", "Corn and cheese", "Pasta Pizza", "Peppy Paneer"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {

        htmldata = htmldata + '<div class="card">' + '<img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>' + menu_list_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}