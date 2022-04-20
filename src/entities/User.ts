export class User {
    constructor(data: any) {
        this.name = data.name,
        this.email = data.email,
        this.cpf = data.cpf,
        this.age = data.age;
    }
    public name: string;
    public email: string;
    public cpf: string;
    public age: number
}