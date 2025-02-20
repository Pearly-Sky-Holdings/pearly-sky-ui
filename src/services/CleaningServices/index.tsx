import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../AxiosOrder";


export const getPackege = createAsyncThunk('getPackeges', async (_, { rejectWithValue }) => {
    try {
        const { data } = await instance.get(`getPackege`);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('An unknown error occurred');
    }
});