import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch as useDefaultDispatch, useSelector as useDefaultSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

export const useDispatch: () => AppDispatch = useDefaultDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;