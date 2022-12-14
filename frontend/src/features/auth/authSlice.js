import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log('user', user)
  }
)

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log('user', user)
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer
