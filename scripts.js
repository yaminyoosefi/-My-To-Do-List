function AddToList(){
    var input = document.getElementById("inputText");
    var inputValue = input.value;
    var ULContent =  document.getElementById("ULContent");
    contentAlert = document.getElementById("content-alert");
    if(inputValue === '') {
        contentAlert.innerHTML="please add your new todo";
    }
    else {
        render(input,inputValue,ULContent);
    }
    input.focus();
}

//add item
function render (input, inputValue, ULContent) {
    contentAlert.innerHTML = '';
    input.value = '';
    var newLi = document.createElement("li");
    ULContent.appendChild(newLi);
    newLi.appendChild(document.createTextNode(inputValue));
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("delete"));
    span.className = "delete";
    newLi.appendChild(span);

    //remove item
    removeFromList();
}

//remove item
function removeFromList() {
    var deleteItems = document.getElementsByClassName("delete");
    var i;
    for(i = 0; i < deleteItems.length ; i++){
        deleteItems[i].onclick = function(){
        var li =  this.parentElement;
        li.className = "hidden";
        }
    }
}

//doUndo item
var ul = document.querySelector("ul");
ul.addEventListener('click' , function(ev) {
   if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
});


