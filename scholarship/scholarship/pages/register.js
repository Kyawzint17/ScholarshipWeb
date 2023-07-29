import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
        <Head>
            <title> Register </title>
        </Head>
        <Link href={"/"}>
        <h1>Register</h1>
        </Link>
        </>
    )
}