const { configureStore } = require("@reduxjs/toolkit");
const { default: MovieSlice } = require("./movies/MovieSlice");

const store = configureStore({
    reducer: {
        movies: MovieSlice
    }
}) 

export default store