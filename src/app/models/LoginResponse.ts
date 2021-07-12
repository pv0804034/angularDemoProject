export interface LoginResponse
{
    responseObject:ResponseObject;
}

interface ResponseObject{
    token:string,
    email:string
}