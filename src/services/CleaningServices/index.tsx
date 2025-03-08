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

export const getServices = createAsyncThunk('searchService', async (id: string, { rejectWithValue }) => {
    try {
        const { data } = await instance.get(`searchService/${id}`);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('An unknown error occurred');
    }
});

export const getRestockList = createAsyncThunk('getItems', async (_, { rejectWithValue }) => {
    try {
        const { data } = await instance.get(`re_stocking_checklists`);        
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('An unknown error occurred');
    }
});


