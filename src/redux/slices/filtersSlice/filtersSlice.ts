import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type FiltersType = {
  search: string,
  selected: boolean,
}

const initialState: FiltersType = {
  search: '',
  selected: false,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>)=> {
      state.search = action.payload
    },
    setSelecteFilter: (state)=> {
      state.selected = !state.selected
    },
    resetFilters: ()=> {
      return initialState
    },
  }

})

export default filtersSlice.reducer
export const { setSearch, setSelecteFilter, resetFilters } = filtersSlice.actions;
export const selectAllFilters = (state: RootState) => state.filters;