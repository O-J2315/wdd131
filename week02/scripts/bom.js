const input = document.getElementById('favchap');
const button2 = document.querySelector('button');
const list = document.getElementById('list');

console.log(input);
console.log(button2);
console.log(list);


button2.addEventListener('click', function(){
    console.log("hy");
    if(input.value.trim() !== ""){
        const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        input.innerText = "";
        input.focus();
    });


    }else {
        alert("Please enter a chapter...");
        input.focus();
    }
});

