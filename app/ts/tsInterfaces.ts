//                          Interfaces
import { commonUserData } from './basicTypes';
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
}

window.onload = () => {
    generateUserContent(commonUserData);
}