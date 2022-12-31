import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
