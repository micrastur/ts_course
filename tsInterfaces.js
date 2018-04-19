"use strict";
function generateUserContent(data) {
    var content = data.name + " " + data.age + " " + data.hasBrother;
    var userData = document.getElementById('userData');
    userData.innerHTML = content;
    data.petName('dsfsdf');
}
window.onload = function () {
    var userData = {
        name: 'Vasya',
        age: 27,
        hasBrother: true,
        petName: function (name) {
            console.log(name);
        }
    };
    generateUserContent(commonUserData);
};
