import * as userRepo from "../respositories/userRepository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
const JWT_SECRET = "your_secret_key_here";
export const registerUser = async (name, email, password) => {
    const hashedPassword = await argon2.hash(password);
    const newUser = await userRepo.createUser(name, email, hashedPassword);
    return newUser;
};
export const loginUser = async (email, password) => {
    const users = await userRepo.getAllUsers();
    const user = users.find(u => u.email === email);
    if (!user)
        throw new Error("User not found");
    const isValid = await argon2.verify(user.password, password);
    if (!isValid)
        throw new Error("Invalid password");
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
};
//# sourceMappingURL=userService.js.map