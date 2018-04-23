"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                          Interfaces
var basicTypes_1 = require("./basicTypes");
function generateUserContent(data) {
    var content = data.name + " " + data.age + " " + data.hasBrother;
    var userData = document.getElementById('userData');
    userData.innerHTML = content;
    data.petName('dsfsdf');
}
window.onload = function () {
    generateUserContent(basicTypes_1.commonUserData);
};
