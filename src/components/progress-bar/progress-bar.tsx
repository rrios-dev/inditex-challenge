"use client";
import { useEffect, useRef, useState } from "react";

import useProgressBar from "./hooks/use-progress-bar";
import styles from "./progress-bar.module.scss";

const ProgressBar = () => {
  const { isLoading } = useProgressBar();
  const [width, setWidth] = useState(0);

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isLoading) {
      interval.current = setInterval(() => {
        setWidth((prevWidth) => 100 - (100 - prevWidth) / 10);
      }, 800);
    } else {
      setWidth(0);
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
  }, [isLoading]);

  return (
    isLoading && (
      <div className={styles["progress-bar"]} style={{ width: `${width}%` }} />
    )
  );
};

export default ProgressBar;
