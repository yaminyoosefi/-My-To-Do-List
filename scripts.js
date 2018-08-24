function AddText(){
    var inputValue = document.getElementById("inputText").value;
    if(inputValue === ''){
        alert("please add your text")
    }
    else {
        var newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(inputValue));
        document.getElementById("ULContent").appendChild(newLi);
        document.getElementById("inputText").value = '';
        } 

//create deleteIcon for all list
var myList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myList.length ; i++){
    var span = document.createElement('SPAN');
    var deleteTxt = document.createTextNode("Delete");
    span.appendChild(deleteTxt);
    span.className = "delete";
    myList[i].appendChild(span);
    myList[i].onclick = function(){
        this.style.textDecoration= "line-through";
    }
}



//create onclick function for each delete and hide the current list item
var deleteItems = document.getElementsByClassName("delete");
var i;
for (i = 0 ; i < deleteItems.length ; i++) {
    deleteItems[i].onclick = function() {
        var li = this.parentElement;
        li.className = "hidden";
    }
}

}