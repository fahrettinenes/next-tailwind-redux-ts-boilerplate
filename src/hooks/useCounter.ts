import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { decrease, increase } from "@/app/slices/counter-slice";

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counterReducer.count);

  return {
    currentCount: count,
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  }
};