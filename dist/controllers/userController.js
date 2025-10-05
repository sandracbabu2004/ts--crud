import * as userService from "../services/userService.js";
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userService.registerUser(name, email, password);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userService.loginUser(email, password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=userController.js.map