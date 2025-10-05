import type { User } from "../models/userModel.js";
export declare const registerUser: (name: string, email: string, password: string) => Promise<User>;
export declare const loginUser: (email: string, password: string) => Promise<{
    user: User;
    token: string;
}>;
//# sourceMappingURL=userService.d.ts.map