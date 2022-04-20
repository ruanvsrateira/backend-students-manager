export class User {
    public readonly id!: number;

    public name!: string;
    public email!: string;
    public cpf!: string;
    public age!: number

    constructor(props: Omit<User, 'id'>) {
        Object.assign(this, props)
    };
}