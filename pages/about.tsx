import Misc from '../styles/misc.module.scss'

export default function About() {
    return (
        <>
            <article className={Misc.fullheight} style={({display: "flex"})}>
                <h1>About</h1>
                {/* The extra style is here just to center the image vertically */}
                <div style={ ({marginTop: "auto", marginBottom: "auto"}) }>
                    <aside>Random cat image brought to you by Cat as a Service</aside>
                    <img src="https://cataas.com/cat" />
                </div>
            </article>
        </>
    )
}