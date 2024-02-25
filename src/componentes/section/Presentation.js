import styles from './Presentation.module.css'
import ButtonA from '../Elements/ButtonA'
import { useEffect, useState } from 'react'



function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Wagner Eugenio!', 'Front End Developer', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => { clearInterval(ticker) };

    }, [text, delta]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }

    }

    return (
        <div className={styles.Presentation} id='Presentation'>
            <h4><strong>Welcome to my Portfolio</strong></h4>
            <h1>Hello, I'm {text}</h1>
            <p>
                Hello! My name is Wagner, a technology enthusiast embarking on an exciting professional journey in the world of software development.<br />

                With a solid foundation in Human Resources and Logistics, I am eager to dive headfirst into the dynamic universe of programming and the<br />
                creation of innovative solutions.

            </p>
            <ButtonA link='https://github.com/WagnerCoelhoEugenio' text='Connect with me!' />

        </div>
    )
}

export default Presentation