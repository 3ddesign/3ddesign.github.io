let list = [];

//add new item in list:
function todoList() {
    let val = document.getElementById('todoInput').value;
    if (val !== "") {
        list.push(val);
        document.getElementById('todoInput').value = "";
        render();
        console.log('array updated: ' + list);
    }
}

//remove item:
function remove(item) {
    list.splice(item, 1);
    render();
    console.log('element removed');
}

//create list items:
let render = function() {
    document.getElementById("todoList").innerHTML = '';
    list.forEach(function(item, i, list) {
        let newItem = document.createElement("li");
        newItem.innerHTML = '<span>' + item + '</span>      <span id="num">(ID:' + i + ')</span> <i onclick="remove(' + i + ')" class="fa fa-times" aria-hidden="true"></i>';
        document.getElementById("todoList").appendChild(newItem);
    });
};


//sorts functions:
function sortByName() {
    let lis = document.getElementsByTagName("li");
    let vals = [];
    for (let i = 0, l = lis.length; i < l; i++)
        vals.push(lis[i].innerHTML);
    vals.sort();
    for (i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
    console.log('list sorted by name');
}

function sortById() {
    render();
    console.log('list sorted by id');
}
