//                            Basic Types:
let userName: string = 'Vasya';                 // 1. String type;
let userAge: number = 27;                       // 2. Number type;
let hasBrother: boolean = true;                 // 3. Boolean type;
let userFriends: string[] = [       
    'Olga',
    'Valeriy',
    'Alexandr'
];                                              // 4. Array string type;
let userFriendsAge: number[] = [
    28, 32, 35
];
let userContacts: [number, string] = [
    34576543789, 'user@gmail.com'
];
let userPetCount: string|number = 2.5          // 5. Tuple type / Any;

enum FavoriteColor {
    Red, Green = 5, Blue
}                                               // 6. Enum type;
let red: FavoriteColor = FavoriteColor.Red;
let colorName: string = FavoriteColor[5];
console.log(colorName);

function setUserAge(year: number): void {
    userAge += year;
}                                               // 7. Void type;

console.log(setUserAge(1));

let phoneModel: undefined = undefined;          // 8. Undefined type;
let phoneNumber: null = null;                   // 9. Null type;

export const commonUserData: {
    name: string,
    age: number,
    hasBrother: boolean
} = {
    name: 'Vasya',
    age: 27,
    hasBrother: true
};