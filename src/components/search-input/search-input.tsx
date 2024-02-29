import cls from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";

import ButtonBase from "../button-base";
import Flex from "../flex";
import Typography from "../typography";
import { SearchInputProps } from "./interfaces";
import styles from "./search-input.module.scss";

const SearchInput = ({
  placeholder = "Search",
  className,
  containerClassName,
  onSearch,
  onDelayedTyping,
  resultsCount,
  ...props
}: SearchInputProps) => {
  const timer = useRef<NodeJS.Timeout>();
  const ref = useRef<HTMLInputElement>(null);

  const image = (
    <Image src="/icons/search.svg" width={12} height={12} alt="search" />
  );

  useEffect(() => {
    if (onDelayedTyping) {
      ref.current?.addEventListener("input", (e) => {
        if (timer.current) {
          clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
          onDelayedTyping(ref.current?.value ?? "");
        }, 350);
      });
    }
  }, [onDelayedTyping]);

  return (
    <Flex direction="column" className={containerClassName}>
      <div className={cls(styles["search-input-container"])}>
        {onSearch ? (
          <ButtonBase onClick={() => onSearch(ref.current?.value ?? "")}>
            {image}
          </ButtonBase>
        ) : (
          image
        )}
        <input
          ref={ref}
          className={cls(styles["search-input"], className)}
          type="text"
          placeholder={placeholder}
          {...props}
        />
      </div>
      {typeof resultsCount === "number" && (
        <Typography>
          {resultsCount} {resultsCount > 1 ? "RESULTS" : "RESULT"}
        </Typography>
      )}
    </Flex>
  );
};

SearchInput.displayName = "SearchInput";

export default SearchInput;
