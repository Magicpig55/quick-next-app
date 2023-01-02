import Misc from '../styles/misc.module.scss'

export default function About() {
    return (
        <>
            <article className={Misc.center}>
                <h1>About</h1>
                <img src="https://cataas.com/cat" />
                <aside>Random cat image brought to you by Cat as a Service</aside>
            </article>
        </>
    )
}