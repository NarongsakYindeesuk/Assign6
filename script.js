// script.js
let commands = [];

function addCommand() {
    let command = prompt("Input a data:");
    if (command) {
        commands.push(command);
        commands.sort();
        displayCommands();
    }
}

function displayCommands() {
    let list = document.getElementById("commandList");
    list.innerHTML = "";
    commands.forEach(cmd => {
        let li = document.createElement("li");
        li.textContent = cmd;
        list.appendChild(li);
    });
}