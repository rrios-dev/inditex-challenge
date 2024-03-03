import { useContext } from "react";

import context from "../context";

const useProgressBar = () => {
  const ctx = useContext(context);

  if (!ctx)
    throw new Error("useProgressBar must be used within a ProgressBarProvider");
  const { state, setState } = ctx;

  const start = (key: string) =>
    setState((currState) => ({
      ...currState,
      executors: currState.executors.add(key),
    }));

  const stop = (key: string) => {
    const newExecutors = new Set<string>(state.executors);
    newExecutors.delete(key);
    setState((currState) => ({
      ...currState,
      executors: newExecutors,
    }));
  };

  const checkIfExecutorIsRunning = (key: string) => state.executors.has(key);

  return {
    progressBar: ctx.state,
    isLoading: ctx.state.executors.size > 0,
    handlers: {
      start,
      stop,
      checkIfExecutorIsRunning,
    },
  };
};

export default useProgressBar;
