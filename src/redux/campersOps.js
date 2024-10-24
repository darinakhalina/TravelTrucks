import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi, getCamperApi } from '../api/campers-api';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 5, params = {} }, thunkAPI) => {
    const queryParams = buildQueryParams(page, limit, params);

    try {
      const data = await getCampersApi(queryParams);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk('campers/fetchOne', async (id, thunkAPI) => {
  try {
    const data = await getCamperApi(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const buildQueryParams = (page, limit, params) => {
  console.log(params);
  return {
    page,
    limit,
    ...(params.location && { location: params.location }),
    ...(params.form && { form: params.form }),
    ...(params.AC && { AC: params.AC }),
    ...(params.TV && { TV: params.TV }),
    ...(params.kitchen && { kitchen: params.kitchen }),
    ...(params.bathroom && { bathroom: params.bathroom }),
    ...(params.autoTransmission && { transmission: 'automatic' }),
  };
};
