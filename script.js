const btn_add = document.querySelector(".btn-add");
const btn_remove = document.querySelector(".btn-remove");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const delButtons = document.querySelectorAll(".delete");


//calling functions
iterateOVerLi(toggle);
createDelButton();


//#####################################
//      other functions utilits
//#####################################
function createLiElement() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        var button = document.createElement("button");

        button.classList = "delete";
        button.onclick = removeLi;
        li.addEventListener("click", toggle);
        li.appendChild(document.createTextNode(input.value));
        li.setAttribute("id", input.value);
        li.appendChild(button);
        ul.append(li);
        input.value = "";
    }
}


//toggle items to red by clicking on it
function toggle() {
    this.classList.toggle("done");
}

function iterateOVerLi(func) {
    for (let item of li) {
        item.addEventListener("click", func);
    }
}

// create a delete Button for inside Element
function createDelButton() {
    for (let item of li) {
        item.insertAdjacentHTML("beforeend", "<button onclick=\"removeLi(event)\" class='delete'></button>");
    }
}

// removing items dynamically
function removeLi(event) {
    event.target.removeEventListener("click", removeLi);
    event.target.parentNode.remove();
}
for (let button of delButtons) {
    button.addEventListener("click", removeLi);
}



//############################################
//                  Events
//############################################
btn_add.addEventListener("click", () => {
    createLiElement();

});

input.addEventListener("keypress", (event) => {
    if (event.which === 13)
        createLiElement();
});
btn_remove.addEventListener("click", () => {
    var item = document.getElementById(input.value);
    if (input.value.length > 0) {
        ul.removeChild(item);
        input.value = "";
    }
});


//document.onmousemove = animateCircle;
//
//    var colors = ["#F0F8FF", "#006400"];
//function animateCircle(event){
//    var circle = document.createElement("div");
//    circle.setAttribute("class", "circle");
//    document.body.appendChild(circle);
//    
//    
//    var color = colors[Math.floor(Math.random() * colors.length)];
//    
//    circle.style.borderColor = color;
//    circle.style.left = event.clientX + 'px';
//    circle.style.top = event.clientY + 'px';
//    circle.style.transition  = "0.3s linear all 0s";
//    
//    
//    circle.style.left = circle.offsetLeft -20 + 'px';
//    circle.style.top = circle.offsetTop -20 + 'px';
//    
//    circle.style.width = "50px";
//    circle.style.height = "50px";
//    circle.style.borderWidth = "5px";  
//    
//    circle.style.opacity = 0;
//    
//    setTimeout(() =>{
//        circle.remove() 
//    }, 300);
//    
//}
