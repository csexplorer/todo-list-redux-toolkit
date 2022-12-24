import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchList} from './todoAPI';

const initialState = {
  list: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchListAsync = createAsyncThunk(
  'todo/list',
  async () => {
    const {data} = await fetchList();
    return data.data;
  }
);

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListAsync.fulfilled, (state, action) => {
        const {payload}  = action;
        debugger;
        state.status = 'idle';

      });
  },
});

export const { increment, decrement, incrementByAmount } = todoSlice.actions;

export default todoSlice.reducer;