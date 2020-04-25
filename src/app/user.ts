export class User {
    constructor(
        public name: string,
        public email: string,
        public phonenumber: number,
        public topic: string,
        public timePreference: string,
        public street: string,
        public city: string,
        public state: string,
        public postalCode: number,
        public subscribe: boolean
    ){}
}
