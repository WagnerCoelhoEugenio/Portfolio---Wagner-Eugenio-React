import styles from './Navbar.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Presentation</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Skills</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projects</Nav.Link></li>

            </ul>
            <ul>
                <li><a href='https://www.instagram.com/coelhowagner/'><FaInstagram size={35} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagnereugenio/?locale=en_US/'><FaLinkedin size={35} /></a></li>
                <li><a href='https://github.com/WagnerCoelhoEugenio'><FaGithub size={35} /></a></li>

            </ul>
        </div >
    )
}

export default Navbar