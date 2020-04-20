import { Role } from './role';

export class User {
	id: number;
	username: string;
	password: string;
	enabled: boolean;
	firstname: string;
	lastname: string;
	email: string;
	roles: Role[];
}
