const input = document.getElementById("input-box");
const lisContainer = document.getElementById("list-container");
console.log(lisContainer);


function listAdded() {
    if(input.value === ""){
      alert("write something first");
    }else{
        let liElement = document.createElement('li');
        liElement.innerHTML = input.value;
        lisContainer.appendChild(liElement);
        document.createElement("span"); 
        let span = span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
}