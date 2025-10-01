export declare const modifyPatients: (id: number, data: {
    name?: string;
    age?: number;
    medicines?: string;
    address?: string;
}) => Promise<import("mysql2").OkPacket>;
export declare const getPatients: () => Promise<import("mysql2").RowDataPacket[]>;
export declare const createPatient: (data: {
    name: string;
    age: number;
    medicines: string;
    address: string;
}) => Promise<import("mysql2").OkPacket>;
export declare const deletePatients: (id: number) => Promise<import("mysql2").OkPacket>;
//# sourceMappingURL=patientServieces.d.ts.map