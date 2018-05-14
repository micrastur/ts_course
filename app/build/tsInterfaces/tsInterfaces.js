"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateUserContent(data) {
    console.log('sdfds');
    var content = data.name + " " + data.age + " " + data.hasBrother;
    var userData = document.getElementById('userData');
    userData.innerHTML = content;
}
exports.default = generateUserContent;
