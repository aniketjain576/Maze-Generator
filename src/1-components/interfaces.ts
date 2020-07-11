import { RootStateOrAny } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

export interface Walls {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export interface Cell {
  walls: Walls;
  visited: boolean;
  index: number;
}

export interface Action {
  type: string;
  payload: {
    index: number;
    cell?: Cell;
  };
}

export type ThunkResult<R> = ThunkAction<
  R,
  RootStateOrAny,
  undefined,
  { type: string }
>;

export type NormalThunk = ThunkResult<void | undefined | null>;
