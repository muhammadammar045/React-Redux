import { configureStore } from "@reduxjs/toolkit";
import githubReducers from "./Slice/GithubSlice";

export const store = configureStore(
    {
        reducer: {
            github: githubReducers
        }
    }
)