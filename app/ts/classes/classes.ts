// Abstract Class

abstract class User {
    protected userName!: string;
    //private userName!: string;
    getUserName(): string {
        return this.userName
    }
    setUsername(name: string): void {
        this.userName = name
    }
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