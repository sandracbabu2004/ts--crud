import type { RowDataPacket, OkPacket } from "mysql2";
export declare const updatePatient: (id: number, data: {
    name?: string;
    age?: number;
    medicines?: string;
    address?: string;
}) => Promise<OkPacket>;
export declare const getAllPatients: () => Promise<RowDataPacket[]>;
export declare const addPatient: (name: string, age: number, medicines: string, address: string) => Promise<OkPacket>;
export declare const deletePatient: (id: number) => Promise<OkPacket>;
//# sourceMappingURL=patientRepository.d.ts.map