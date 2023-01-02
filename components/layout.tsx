import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import React, { ComponentProps } from "react";

type Props = {
    children?: React.ReactNode
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
        <main>
            {children}
        </main>
    </>)
} 