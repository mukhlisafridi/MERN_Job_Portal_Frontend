import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  singleJob: null,
  loading: false,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setLoading } = jobSlice.actions;

export default jobSlice.reducer;
