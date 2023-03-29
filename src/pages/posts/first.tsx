import Link from 'next/link'
import Head from 'next/head'
import Container from '@/styles/container'
import styles from '@/styles/Home.module.css'

export default function FirstPost() {
    return (
        <>
            <Container>
                <Head>
                    <title>My First Post</title>
                </Head>
                <h1>My First Post</h1>
                <h2>
                    <Link href="/">
                        Home
                    </Link>
                </h2>
            </Container>
        </>
    )
}