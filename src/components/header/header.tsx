import Image from 'next/image';

import HeaderHeartButton from './components/header-heart-button';
import styles from './header.module.scss';


const Header = () => {
    return <header className={styles.header}>
        <div className={styles.container}>
            <Image src="/img/marvel-logo.svg" alt="Marvel logo" width={130} height={52} />
            <HeaderHeartButton />
        </div>
    </header>
};

export default Header;