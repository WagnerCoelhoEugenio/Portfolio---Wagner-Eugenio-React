import styles from './Card.module.css';
import ButtonB from './ButtonB';
import { useState } from 'react'

function Card({ img, title, tech, descripition, repo, site, }) {

    const [info, setInfo] = useState(false)

    function InfoOn() {
        setInfo(true)
    }

    function InfoOff() {
        setInfo(false)


    }

    return (

        <div onMouseLeave={InfoOff} className={styles.Card}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='ERRO' />
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Technology: </strong>{tech}</p>
                    <p>{descripition}</p>
                    <ButtonB text='Go to my repository' link={repo} />
                </section>

            )}


        </div>
    )
}
export default Card