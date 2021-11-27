import { createSlice } from "@reduxjs/toolkit";




const initialState = [
    {id: 1, imageUrl: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 2, imageUrl: "https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 3, imageUrl: "https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 4, imageUrl: "https://images.pexels.com/photos/1564280/nature-milky-way-stars-space-1564280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 5, imageUrl: "https://images.pexels.com/photos/1329917/pexels-photo-1329917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id: 6, imageUrl: "https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
];


const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        imagesAdded(state, action) {
            state.push(action.payload);
        },
        imagesDeleted(state, action) {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1);
        }
    },
});

export const { imagesAdded , imagesDeleted} = imagesSlice.actions;

export default imagesSlice.reducer;