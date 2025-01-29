import {create} from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const KEY_TABLE_STATE = "TableState";

export type TableState = {
    // data
    data: string;
    // operations
    setTable: (data: string) => void;
    // record input
};

export const useTableStore = create(
    persist<TableState>(
        (set, get) => ({
            data: `Heading1,Heading2,Heading3,Heading4,Heading5,Heading6,Heading7,Heading8
row-1-value-1,row-1-value-2,row-1-value-3,row-1-value-4,row-1-value-5,row-1-value-6,row-1-value-7,row-1-value-8
row-2-value-1,row-2-value-2,row-2-value-3,row-2-value-4,row-2-value-5,row-2-value-6,row-2-value-7,row-2-value-8
row-3-value-1,row-3-value-2,row-3-value-3,row-3-value-4,row-3-value-5,row-3-value-6,row-3-value-7,row-3-value-8
            `,
            // operations
            setTable: (data: string) => {
                set({
                    data: data,
                });
            },
        }),
        {
            name: KEY_TABLE_STATE,
            storage: createJSONStorage(()=>sessionStorage),
        },
    ),
);
