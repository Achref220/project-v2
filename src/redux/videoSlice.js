import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {frame: "https://www.youtube-nocookie.com/embed/_oCgtA9E6YI", id: 1},
    {frame: "https://www.youtube-nocookie.com/embed/OeYnV9zp7Dk", id: 2},
    {frame: "https://www.youtube-nocookie.com/embed/bba9MRHveiU", id: 3},
    {frame: "https://www.youtube-nocookie.com/embed/uD4izuDMUQA", id: 4},
    {frame: "https://www.youtube-nocookie.com/embed/cTQ3Ko9ZKg8", id: 5},
    {frame: "https://www.youtube-nocookie.com/embed/Rf5E2FSFOjU", id: 6}
]



export const videoSlice = createSlice({
    name: "video",
    initialState
});


export default videoSlice.reducer