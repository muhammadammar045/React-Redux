import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const users = createAsyncThunk('github/users', async () => {
    console.log("clicked")
    try {
        const response = await axios(`https://api.github.com/users`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(users.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(users.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(users.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null
        })
    }
})

export default githubSlice.reducer