import { MedicineType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/types`;

const getType= async (): Promise<MedicineType[]> => {
    const res = await fetch(URL);

    return res.json()
};

export default getType;