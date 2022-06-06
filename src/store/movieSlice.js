import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {SEARCH_BASE_URL, MOVIE_DETAILS_URL} from '../apiConfig';

const initialState = {
  popular: [],
  details: [],
  error: null,
  isLoading: true,
  searchResults: [],
  searchQuery: '',
  page: 1,
};

export const fetchPopular = createAsyncThunk(
  'popular/fetchPopular',
  (page) => {
    return axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}
      `
    ).then((response) => response.data.results);
  }
);
export const fetchSearch = createAsyncThunk(
  'popular/fetchSearch',
  (search, page) => {
    return axios(`${SEARCH_BASE_URL}${search}&page=${page}
    `).then((response) => response.data.results);
  }
);
export const fetchDetails = createAsyncThunk(
  'details/fetchDetails',
  (id) => {
    return axios(
      `${MOVIE_DETAILS_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits,videos,images,release_dates,similar,recommendations,reviews`
    ).then((response) => response.data);
  }
);
export const addPages = createAsyncThunk(
  'popular/addPages',
  (page) => {
    return axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=${
        page + 1
      }&append_to_response=credits,videos,images,release_dates,similar,recommendations,reviews`
    ).then((response) => response.data.results);
  }
);

export const addSearchPages = createAsyncThunk(
  'popular/addSearchPages',
  (search, page) => {
    return axios(`${SEARCH_BASE_URL}${search}&page=${page + 1}
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
    builder.addCase(fetchDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addPages.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addPages.fulfilled, (state, action) => {
      state.popular = state.popular.concat(action.payload);

      state.isLoading = false;
    });
    builder.addCase(addPages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addSearchPages.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addSearchPages.fulfilled, (state, action) => {
      state.searchResults = [
        ...new Set(state.searchResults.concat(action.payload)),
      ];
      state.isLoading = false;
    });
    builder.addCase(addSearchPages.rejected, (state, action) => {
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

export default movieSlice.reducer;
