"use strict";
//                            Basic Types:
var userName = 'Vasya'; // 1. String type;
var userAge = 27; // 2. Number type;
var hasBrother = true; // 3. Boolean type;
var userFriends = [
    'Olga',
    'Valeriy',
    'Alexandr'
]; // 4. Array string type;
var userFriendsAge = [
    28, 32, 35
];
var userContacts = [
    'user@gmail.com', 34576543789
];
var userPetCount = 2.5; // 5. Tuple type / Any;
var FavoriteColor;
(function (FavoriteColor) {
    FavoriteColor[FavoriteColor["Red"] = 0] = "Red";
    FavoriteColor[FavoriteColor["Green"] = 5] = "Green";
    FavoriteColor[FavoriteColor["Blue"] = 6] = "Blue";
})(FavoriteColor || (FavoriteColor = {})); // 6. Enum type;
var red = FavoriteColor.Red;
var colorName = FavoriteColor[5];
console.log(colorName);
function setUserAge(year) {
    userAge += year;
    return userAge;
} // 7. Void type;
console.log(setUserAge(1));
var phoneModel = undefined; // 8. Undefined type;
var phoneNumber = null; // 9. Null type;
var commonUserData = {
    name: 'Vasya',
    age: 27,
    hasBrother: true
};
