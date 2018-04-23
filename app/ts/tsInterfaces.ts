//                          Interfaces
interface UserData {
    name: string;
    age: number;
    hasBrother: boolean;
    hobbies?: string[];  //optional, not required while transpiling
    [propName: string]: any;
    yourMethod?: {(prop: number): number};
}

function generateUserContent(data: UserData):void {
    const content = `${data.name} ${data.age} ${data.hasBrother}`
    var userData = <HTMLElement> document.getElementById('userData');
    userData.innerHTML = content;
    data.petName('dsfsdf');
}

window.onload = () => {
    const userData = {
        name: 'Vasya',
        age: 27,
        hasBrother: true,
        petName: function(name: string) {
            console.log(name);
        }
    }
    generateUserContent(commonUserData);
}