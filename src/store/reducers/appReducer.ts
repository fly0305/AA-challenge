import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAppState {
  isInitial: boolean;
  isLoading: boolean;
}

const initialState: IAppState = {
  isLoading: false,
  isInitial: true
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsInitial: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isInitial = action.payload
    }
  }
})

export const { setIsLoading, setIsInitial} = appSlice.actions
export default appSlice.reducer
