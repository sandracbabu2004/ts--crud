import type { User } from "../models/userModel.js";
export declare const createUser: (name: string, email: string, password: string) => Promise<User>;
export declare const findUserById: (id: string) => Promise<User | undefined>;
export declare const getAllUsers: () => Promise<User[]>;
//# sourceMappingURL=userRepository.d.ts.map