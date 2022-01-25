import db from '../db';
import User from '../Models/user.model';

class UserRespository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const result = await db.query<User[]>(query);

        return [];
    }
}

export default new UserRespository();