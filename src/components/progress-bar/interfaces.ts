import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProgressBarProps {}

export interface ProgressBarProviderProps {
  children: ReactNode;
}

export interface ProgressBarState {
  executors: Set<string>;
}

export interface ProgressBarContext {
  state: ProgressBarState;
  setState: Dispatch<SetStateAction<ProgressBarState>>;
}
