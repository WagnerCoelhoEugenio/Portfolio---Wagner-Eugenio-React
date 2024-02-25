import styles from './Skills.module.css';
import javascript from '../../Image/Skills/javascript.svg'
import html from '../../Image/Skills/html.svg'
import css from '../../Image/Skills/css.svg'
import typescript from '../../Image/Skills/typescript.svg'
import react from '../../Image/Skills/react.svg'


function Skills() {
    return (
        <div className={styles.Skills} id="Skills">
            <h1>Skills</h1>
            <p>Get to know a little of my main skills and knowledge.</p>
            <div>
                <img src={javascript} />
                <img src={html} />
                <img src={css} />
                <img src={typescript} />
                <img src={react} />


            </div>
        </div>
    )
}

export default Skills