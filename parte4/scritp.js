// 1 - Select the section with an id of container without using querySelector.

console.log(document.getElementById("container"));

// 2 - Select the section with an id of container using querySelector.

console.log(document.querySelector("#container"))


// 3 - Select all of the list items with a class of "second".

console.log(document.getElementsByClassName("second"))

    // OR

console.log(document.querySelectorAll(".second"))

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.

console.log(document.querySelector("ol .third"))

// 5 - Give the section with an id of container the text "Hello!".

const foundDiv=()=>{
    let va=document.querySelector("#container");
va.innerText ="Hello"
};

//foundDiv()
// 6 - Add the class main to the div with a class of footer.

var footer = document.querySelector(".footer");
footer.classList.add("main");


// 7 - Remove the class main on the div with a class of footer.

var footer = document.querySelector(".footer")
footer.classList.remove("main");

// 8 - Create a new li element.

var newLi = document.createElement("li");

// 9 - Give the li the text "four".

newLi.innerText = "four"

// 10 - Append the li to the ul element.

var list = document.querySelector("ul");
list.appendChild(newLi);

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".

var liInsideOl = document.querySelectorAll("ol li");
for(var i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

// 12 - Remove the div with a class of footer.

var footer = document.querySelector(".footer");
footer.remove();