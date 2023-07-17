import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={logo} alt="Logo KASA"/>
            <p className={styles.copyright}> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;