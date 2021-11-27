import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "../redux/planetsSlice";
import userReducer from '../redux/userSlice';
import postsReducer from '../redux/postSlice';
import imagesReducer from '../redux/imagesSlice'
import videoSlice from "../redux/videoSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        planets: planetsReducer,
        posts: postsReducer,
        images: imagesReducer,
        video: videoSlice,
    }
})