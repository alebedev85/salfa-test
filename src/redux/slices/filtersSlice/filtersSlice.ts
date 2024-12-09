import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type FiltersType = {
  search: string,
  selected: boolean,
  categore: string | null,
}

const initialState: FiltersType = {
  search: '',
  selected: false,
  categore: null,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>)=> {
      state.search = action.payload
    },
    setSelecteFilter: (state)=> {
      state.selected = !state.selected
    },
    setCategoreFilter: (state, action: PayloadAction<string | null>)=> {
      state.categore = action.payload
    },
    resetFilters: ()=> {
      return initialState
    },
  }

})

export default filtersSlice.reducer
export const { setSearchFilter, setSelecteFilter, setCategoreFilter, resetFilters } = filtersSlice.actions;
export const selectAllFilters = (state: RootState) => state.filters;