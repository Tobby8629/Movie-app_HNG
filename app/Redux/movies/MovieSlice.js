import axios from 'axios';
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const movies = createAsyncThunk("movielist/movies", async()=>{
    // const res = await fetch("https://api.themoviedb.org/3/movie/popular",{
    //     method: 'GET',
    //     headers: {'api': '2a91006b666667c8a01ea73da168fb73'}
    // })
    // const data = await res.json()
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2a91006b666667c8a01ea73da168fb73&language=en-US&page=1')
    return response.data
})


const initialState = {
  status: true,
  movielist: [],
}

const movie = createSlice ({
  name: 'movielist',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(movies.pending,(state, action)=>{
       state.status = true
    })
    builder.addCase(movies.fulfilled,(state, action)=>{
        const movie = action.payload.results
        if(movie) {
           state.movielist = movie
          state.status = false
        }
    })
  }  
})

export default movie.reducer