import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/coelhowagner/'><FaInstagram size={35} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagnereugenio/?locale=en_US/'><FaLinkedin size={35} /></a></li>
                <li><a href='https://github.com/WagnerCoelhoEugenio'><FaGithub size={35} /></a></li>
            </ul>
            <p>wagnereugenio@hotmail.com</p>
            <p>Wagner Coelho Eugenio, © Copyright, 2024</p>
        </div>
    )
}

export default Footer