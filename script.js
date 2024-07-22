let arrayList = [];

function showList(){
    let html = '';
    for(let i = 0; i< arrayList.length; i++){
        let {name, date} = arrayList[i];
        let token = `<div>${name}</div>
        <div>${date}</div>
        <button onclick = "deleteTodo(${i})" class = "delete-button">Delete</button>`
        html += token;
    }
    document.querySelector('.display-todoList').innerHTML = html;
}

function clear(event){
    if(event.key ==='Enter'){
        addTodo();
    }
}


function addTodo(){
    let nameElement = document.querySelector('.inputTodo');
    let dateElement = document.querySelector('.inputDate');
    if(nameElement.value ==='') return;
    arrayList.push({
        name: nameElement.value,
        date: dateElement.value
    });
    showList();
    nameElement.value = '';
    dateElement.value = '';
}

function deleteTodo(i){
    arrayList.splice(i,1);
    showList();
}