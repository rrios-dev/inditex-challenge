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

  // TODO: Enhance error component
  if (props.status === "error") return <Typography>Error</Typography>;

  const { releaseDate, imageSrc, title } = props;

  return (
    <Flex direction="column" className={styles["comic-card"]}>
      <img
        src={imageSrc.replace("http", "https")}
        alt={`Poster image of Comic ${title}`}
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
