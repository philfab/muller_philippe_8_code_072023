import logo from '../../assets/images/logo_f.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo KASA"/>
            <h4 className={styles.copyright}> © 2020 Kasa. All rights reserved</h4>
        </footer>
    );
};

export default Footer;