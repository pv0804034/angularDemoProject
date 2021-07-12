export class User
{
    constructor(public email:string,public token:string)
    {
    }

    getToken()
    {
     return this.token;
    }
}