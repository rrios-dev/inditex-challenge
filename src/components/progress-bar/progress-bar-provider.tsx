"use client";
import { useState } from "react";

import { PROGRESS_BAR_DEFAULT_STATE } from "./constants";
import context from "./context";
import { ProgressBarProviderProps, ProgressBarState } from "./interfaces";

const ProgressBarProvider = ({ children }: ProgressBarProviderProps) => {
  const [state, setState] = useState<ProgressBarState>(
    PROGRESS_BAR_DEFAULT_STATE
  );
  return (
    <context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ProgressBarProvider;
