import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

    }
})

export default githubSlice.reducer