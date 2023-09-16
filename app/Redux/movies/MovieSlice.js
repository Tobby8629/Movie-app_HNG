import axios from 'axios';
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const movies = createAsyncThunk("movielist/movies", async()=>{
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2a91006b666667c8a01ea73da168fb73&language=en-US&page=1')
  return response.data
})

export const Detail = createAsyncThunk("movielist/Detail", async(payload)=>{
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=2a91006b666667c8a01ea73da168fb73&language=en-US&page=1`)
  return response.data
})


const initialState = {
  status: true,
  movielist: undefined,
  failed: false,
  detail: undefined
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
    builder.addCase(movies.rejected,(state)=>{
       state.status = false
       state.failed = true
    })

    builder.addCase(Detail.pending,(state, action)=>{
      state.status = true
   })

    builder.addCase(Detail.fulfilled,(state, action)=>{
      const movie = action.payload
      if(movie) {
         state.detail = movie
         state.status = false
      }
  })

  builder.addCase(Detail.rejected,(state)=>{
    state.status = false
    state.failed = true
 })
  }  
})

export default movie.reducer