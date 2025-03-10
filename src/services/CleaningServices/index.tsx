import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../AxiosOrder";


export const getPackege = createAsyncThunk('getPackeges', async (id: string, { rejectWithValue }) => {
    try {
        const { data } = await instance.get(`service_with_packages/${id}`);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('An unknown error occurred');
    }
});