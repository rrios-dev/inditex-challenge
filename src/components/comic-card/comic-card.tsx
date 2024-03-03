import Flex from "../flex";
import Typography from "../typography";

import styles from "./comic-card.module.scss";
import { ComicCardProps } from "./interfaces";

const ComicCard = (props: ComicCardProps) => {
  if (props.status === "loading")
    return (
      <div className={styles["comic-card-skeleton"]}>
        <div className={styles["comic-card-skeleton-image"]} />
        <div className={styles["comic-card-skeleton-text"]} />
        <div className={styles["comic-card-skeleton-year"]} />
      </div>
    );

  if (props.status === "error") return <Typography>Error loading</Typography>;

  const { releaseDate, imageSrc, imageAlt, title } = props;

  return (
    <Flex direction="column" className={styles["comic-card"]}>
      <img
        src={imageSrc.replace("http", "https")}
        alt={imageAlt}
        loading="lazy"
        className={styles["comic-card-image"]}
      />
      <Typography className={styles["comic-card-title"]}>{title}</Typography>
      {releaseDate && (
        <Typography className={styles["comic-card-year"]}>
          {new Date(releaseDate).getFullYear()}
        </Typography>
      )}
    </Flex>
  );
};

export default ComicCard;
