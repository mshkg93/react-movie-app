import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {SEARCH_BASE_URL} from '../apiConfig';

const initialState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  error: null,
  isLoading: true,
  searchResults: [],
  searchQuery: '',
};

export const fetchPopular = createAsyncThunk(
  'popular/fetchPopular',
  () => {
    return axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    ).then((response) => response.data.results);
  }
);
export const fetchSearch = createAsyncThunk(
  'popular/fetchSearch',
  (search) => {
    return axios(`${SEARCH_BASE_URL}${search}
    `).then((response) => response.data.results);
  }
);
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
      state.isLoading = false;
    },
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPopular.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  setPopular,
  setNowPlaying,
  setUpcoming,
  setError,
  setIsLoading,
  setSearchResults,
  setSearchQuery,
} = movieSlice.actions;

export const showPopular = (state) => state.movie.popular;
export default movieSlice.reducer;
