import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../AxiosOrder";


export const saveServices = createAsyncThunk('save-services', async (serviceData : any, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`saveServiceDetails`, serviceData);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});
