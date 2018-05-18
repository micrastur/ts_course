// Abstract Class

abstract class User {
    protected userName!: string;
    public readonly height: number = 186;
    //private userName!: string;
    getUserName(): string {
        return this.userName;
    }
    setUsername(name: string): void {
        this.userName = name;
    }

    // changeHeight(height): void {
    //     this.height += height;
    // }
}

export default class UniqUser extends User {
    public jobPosition!: string;
    private age!: number;

    constructor (name: string, jobPosition: string) {
        super();
        this.jobPosition = jobPosition;
        this.setUsername(name);
        console.log(this.userName, this.jobPosition);
    }

}

//var c = new User();