import Head from "next/head";
import Navbar from "./navbar";
import { ReactNode } from "react";
import Main from "../styles/main.module.scss"
import Misc from '../styles/misc.module.scss'

type Props = {
    children?: ReactNode
}
export default function Layout({children}: Props) {
    return (<>
        <Head>
            <title>Funny Little App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <header>
                <Navbar />
            </header>
        </header>
        <div className={`${Misc.hcenter} ${Misc['main-text']}`}>
            <main className={Main.main}>
                {children}
            </main>
        </div>
    </>)
} 