//                          Interfaces
interface UserData {
    name: string;
    age: number;
    hasBrother: boolean;
    hobbies?: string[];  //optional, not required while transpiling
    [propName: string]: any;
    yourMethod?: {(prop: number): number};
}

export default function generateUserContent(data: UserData):void {
    console.log('sdfds');
    const content = `${data.name} ${data.age} ${data.hasBrother}`
    var userData = <HTMLElement> document.getElementById('userData');
    userData.innerHTML = content;
}

