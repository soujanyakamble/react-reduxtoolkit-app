import {createSlice} from "@reduxjs/toolkit"
import { BlogAction, getBlogAction } from "../Action/BlogAction"

export const BlogSlice = createSlice({
    name : "BlogData",
    initialState : {blogdata : []},
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(BlogAction.pending, (state , {payload})=>{
            state.loading = true
        })
        .addCase(BlogAction.fulfilled, (state , {payload})=>{
            state.loading = true
            state.addedblog = payload
        })
        .addCase(BlogAction.rejected, (state , {payload})=>{
            state.loading = true
            state.blogError = payload
        })

        // *******************************
        .addCase(getBlogAction.pending, (state , {payload})=>{
            state.loading = true
        })
        .addCase(getBlogAction.fulfilled, (state , {payload})=>{
            state.loading = true
            state.blogdata = payload
        })
        .addCase(getBlogAction.rejected, (state , {payload})=>{
            state.loading = true
            state.blogError = payload
        })
    }
})