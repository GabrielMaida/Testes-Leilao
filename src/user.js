let users = [];

function addUser(user) {
    users.push(user);
    console.log(users);
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function clearUsers(){
    users = [];
    return users;
}

module.exports = {
    addUser,
    getUserById,
    clearUsers
};