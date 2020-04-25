import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  enabled = true;
  firstname: string;
  lastname: string;
  email: string;
  roles: Role[] = [{ id: 1, name: 'ROLE_USER' }];
}
