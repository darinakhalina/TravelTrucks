import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi, getCamperApi } from '../api/campers-api';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (params = {}, thunkAPI) => {
  try {
    const data = await getCampersApi({ ...params });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCamper = createAsyncThunk('campers/fetchOne', async (id, thunkAPI) => {
  try {
    const data = await getCamperApi(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
