import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    "user/fetchUser", async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            return res.data;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            // state.user = action.payload;
            console.log(action)
        })
    }
})

export const userReducer = userSlice.reducer;
// export const { } = userSlice.actions;