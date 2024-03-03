import Section from "@/components/section";
import Typography from "@/components/typography";

import styles from "./not-found.module.scss";
const NotFoundScene = () => (
  <Section title="Not Found" className={styles["not-found"]}>
    <Typography>Sorry, the page you are looking for does not exist.</Typography>
  </Section>
);

export default NotFoundScene;
