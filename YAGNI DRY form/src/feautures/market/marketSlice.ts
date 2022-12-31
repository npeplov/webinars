import { createSlice } from '@reduxjs/toolkit'

interface IMarket {
  title: string,
}

interface MarketState {
  products: IMarket[]
}

const initialState: MarketState = {
  products: [{ title: '.....' }]
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
  }
})

export default marketSlice.reducer