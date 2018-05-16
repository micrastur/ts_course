import UserData from "../tsInterfaces/tsInterfaces";

export namespace UserInfo {
    export namespace UserContent {
        export function generateUserContent(data: UserData):void {
            const content = `${data.name} ${data.age} ${data.hasBrother}`
            var userData = <HTMLElement> document.getElementById('userData');
            userData.innerHTML = content;
        }
    }
}