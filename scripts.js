function AddToList(){
    var inputText = document.getElementById("inputText").value;
    if(inputText === '') {
        document.getElementById("content-alert").innerHTML="please add your new todo";
    }
    else {
        document.getElementById("content-alert").innerHTML = '';
        document.getElementById("inputText").value = '';
        var newLi = document.createElement("li");
        document.getElementById("ULContent").appendChild(newLi);
        newLi.appendChild(document.createTextNode(inputText));
        var span = document.createElement("span");
        span.appendChild(document.createTextNode("delete"));
        span.className = "delete";
        newLi.appendChild(span);

        //remove item
        removeFromList();
}
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
},false);


