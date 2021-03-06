import { RootStateOrAny } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

export enum WALL_TYPES {
  TOP = 'TOP',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
}

type WallType = {
  [key in WALL_TYPES]: boolean;
};

export interface Walls extends WallType {}

export interface Cell {
  walls: Walls;
  visited: boolean;
  index: number;
}

export interface Action {
  type: string;
  payload: {
    cell: Cell;
    index?: number;
    interval?: number;
    stack?: Cell[];
    currentCellIndex?: number;
    cells?: Cell[];
  };
}

export type ThunkResult<R> = ThunkAction<
  R,
  RootStateOrAny,
  undefined,
  { type: string }
>;

export type NormalThunk = ThunkResult<void | undefined | null>;
