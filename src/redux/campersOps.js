import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi } from '../api/campers-api';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (params = {}, thunkAPI) => {
  try {
    const data = await getCampersApi({ ...params });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
