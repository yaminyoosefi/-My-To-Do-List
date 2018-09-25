var myList = JSON.parse(localStorage.getItem('myList') || '[]');
var ULContent =  document.getElementById("ULContent");
var input = document.getElementById("inputText");

function clearULContainer() {
    ULContent.innerHTML = " ";
}

function removeItemFromList() {
    var deleteItems = document.getElementsByClassName("delete");
    var i;
    for(i = 0; i < deleteItems.length ; i++){
        (function(i) {
            deleteItems[i].onclick = function(){
                var li =  this.parentElement;
                li.className = "hidden";
                // var x = myList.splice(myList.indexOf(li.firstChild.nodeValue), 1);
                var x = myList.splice(i, 1);
                console.log(li.firstChild.nodeValue);
                updateLocalStorage();        
            }
        })(i)
    }
}

function doUndo(li) {
    li.isDone = !li.isDone;
    updateLocalStorage();
    render(); 
}

function createLiElement(li) {
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(li.value));
    ULContent.appendChild(newLi);
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("delete"));
    span.className = "delete";
    newLi.appendChild(span);
    if (li.isDone) {
        newLi.style.textDecoration = 'line-through';
    }
    
    //remove item
    removeItemFromList();
    newLi.onclick = function () { doUndo(li); };
}
function updateLocalStorage() {
    localStorage.setItem('myList', JSON.stringify(myList));
}

function render () {
    clearULContainer() ;
    for( var i = 0; i < myList.length ; i++) {
         createLiElement(myList[i]);
    }
}

function AddToArray(inputValue) {
    myList.push({ value: inputValue});
    updateLocalStorage();
    render();
}

function Add(){
    var inputValue = input.value;
    if (inputValue) {
        AddToArray(inputValue);
    }
    input.focus();
    input.value = '';
}


















