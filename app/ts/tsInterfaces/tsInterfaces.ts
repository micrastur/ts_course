//                          Interfaces
interface UserData {
    name: string;
    age: number;
    hasBrother: boolean;
    hobbies?: string[];  //optional, not required while transpiling
    [propName: string]: any;
    yourMethod?: {(prop: number): number};
}

export default UserData;