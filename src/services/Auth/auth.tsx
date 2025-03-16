import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../AxiosOrder";

export const getAuth = createAsyncThunk('auth/details', async (credentials : {email: string, password: string}, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`login`,credentials);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});

export const getOtp = createAsyncThunk('auth/details', async (credentials : {email: string,}, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`forgot_password`,credentials);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});

export const getForgotPassword  = createAsyncThunk('auth/details', async (credentials : {email: string,otp: string,password: string}, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`verify_otp`,credentials);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});