const { addUser, getUserById, clearUsers } = require('../../src/user');

describe('User', () => {

    beforeEach(() => {
        clearUsers();
        jest.clearAllMocks();
    });

    it('should add a user', () => {
        const user = { id: 1, name: 'Alice' };
        const addedUser = addUser(user);

        expect(addedUser[0]).toHaveProperty('id');
        expect(addedUser[0]).toHaveProperty('name');
        expect(addedUser).toContainEqual(user);
    });

    it('should get a user by id', () => {
        jest.spyOn(require('../../src/user'), 'addUser').mockImplementation(() => {
            users = [{ id: 2, name: 'John' }];
            return users;
        });

        const user = { id: 2, name: 'John' };
        addUser(user);

        const userReturned = getUserById(2);

        expect(userReturned).toEqual(user);
    });
});
