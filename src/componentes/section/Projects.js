import ButtonB from '../Elements/ButtonB';
import styles from './Projects.module.css';
import Card from '../Elements/Card';
import lpdnc from '../../Image/Projects/lpdnc.svg'
import Portfolio from '../../Image//Projects/Portfolio.svg'


function Projects() {
    return (
        <div className={styles.Projects} id='Projects'>
            <h1>Projects</h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                descripition="Development of a Landing Page for the launch of training in Technology"
                repo="https://github.com/WagnerCoelhoEugenio/Projeto-Landing-page.git"
                site=""
            />
            <Card
                img={Portfolio}
                title="Portfolio React"
                tech="React"
                descripition=""
                repo="https://github.com/WagnerCoelhoEugenio/Projeto-Landing-page.git"
                site=""
            />


            <ButtonB text='Go to my repository' link='https://github.com/WagnerCoelhoEugenio?tab=respositories' />
        </div >
    )
}

export default Projects