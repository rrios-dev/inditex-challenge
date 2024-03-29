import Image from "next/image";

import AnimatedLink from "../animated-link";

import HeaderHeartButton from "./components/header-heart-button";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <AnimatedLink aria-label="Go to hero finder" href="/">
        <Image
          priority
          src="/img/marvel-logo.svg"
          alt="Marvel logo"
          width={130}
          height={52}
        />
      </AnimatedLink>
      <HeaderHeartButton />
    </div>
  </header>
);

export default Header;
