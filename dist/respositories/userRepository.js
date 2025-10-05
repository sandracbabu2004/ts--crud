import { v4 as uuidv4 } from "uuid";
const users = [];
export const createUser = async (name, email, password) => {
    const newUser = {
        id: uuidv4(),
        name,
        email,
        password,
        createdAt: new Date(),
    };
    users.push(newUser);
    return newUser;
};
export const findUserById = async (id) => {
    return users.find((u) => u.id === id);
};
export const getAllUsers = async () => {
    return users;
};
//# sourceMappingURL=userRepository.js.map