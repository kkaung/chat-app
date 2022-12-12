export type LoginUser = { email: string; password: string };

export interface RegisterUser extends LoginUser {
    username: string;
}

export type User = {
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};
