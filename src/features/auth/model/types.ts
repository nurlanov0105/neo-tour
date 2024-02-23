export type RegisterApiResponse = {};

export type RegisterParams = {
   firstName: string;
   lastName: string;
   email: string;
   userImage: string;
   password: string;
   status?: any;
};

export type LoginApiResponse = {
   id: number;
   fullName: string;
   token: string;
   email: string;
   role: string;
   error?: any;
};

export type LoginParams = Record<'email' | 'password', string>;
