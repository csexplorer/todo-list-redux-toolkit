import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchList, remove} from './todoAPI';

const initialState = {
  list: [],
  status: 'idle',
};
export const fetchListAsync = createAsyncThunk(
  'todo/list',
  async () => {
    const {data} = await fetchList();
    return data.data;
  }
);


export const removeAsync = createAsyncThunk(
    'todo/remove',
    async (id) => {
        await remove(id);

      return {id};
    }
);

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListAsync.fulfilled, (state, action) => {
        const {payload}  = action;
        state.list = payload;
        state.status = 'idle';
      });

    builder.addCase(removeAsync.pending, (state) => {
      state.status = 'loading';
    })
        .addCase(removeAsync.fulfilled, (state, action) => {

            const {id} = action.payload;

            state.list = state.list.filter(item => item.id !== id);
          state.status = 'idle';
        });
  },
});

export default todoSlice.reducer;
