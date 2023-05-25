// alert("hi");

let newData = document.getElementById("newData");
let createbutton = document.getElementById("createuser");
let url = "https://jsonplaceholder.typicode.com/users";

function initialise() {
    index = 0;
    newData.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);

        obj.forEach((data) => {
            newData.innerHTML += `<tr><td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.website}</td></tr>`;
            index += 1;
        });
    };

    xhr.send();
}

initialise();

function add_user() {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");

    let title = prompt("Enter name: ");
    let message = prompt("Enter website: ");

    let obj = JSON.parse(`{"id":${index + 1},"name":"${title}","website":"${message}"}`);
    // console.log(obj);

    xhr.onload = () => {
        initialise();
        console.log(obj);
    };
    xhr.send(JSON.stringify(obj));
}

createbutton.addEventListener("click", add_user);
