import { createSlice } from '@reduxjs/toolkit';
import { getFeedbackList } from "../../../services/CleaningServices/index";


interface Feedback {
  id: number;
  star_count: string;
  name: string;
  description: string;
  date: string;
  social_media_type: string;
  created_at: string;
  updated_at: string;
}

interface FeedbackState {
    feedback:{
        data: Feedback[];
        isLoading: boolean;
        isSuccess: boolean;
        errorMessage: string;
    }  
}

const initialState: FeedbackState = {
    feedback:{
        data: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: "",
    }
  
};

export const feedbaackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeedbackList.pending, (state) => {
        state.feedback.isLoading = true;
        state.feedback.isSuccess = false;
        state.feedback.errorMessage = "";
      })
      .addCase(getFeedbackList.fulfilled, (state, { payload }) => {
              state.feedback.isLoading = false;
              state.feedback.isSuccess = true;
              state.feedback.data = payload;
            })
            .addCase(getFeedbackList.rejected, (state, { payload }) => {
              state.feedback.isLoading = false;
              state.feedback.isSuccess = false;
              state.feedback.errorMessage = payload as string;
            });
  },
});

export default feedbaackSlice.reducer;
