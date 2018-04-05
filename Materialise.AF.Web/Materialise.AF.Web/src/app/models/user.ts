export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  } 
}

export class UserDto {
  id: number;
  token: string;
}