import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Joseph's homepage" />
                <meta name="author" content="Joseph Brown" />
                <meta name="author" content="Lyfe Unlimited" />
                <link rel="apple-touch-icon" href="JBLogo.png" />
                <link rel="shortcut icon" href="images/favicon.ico" type="images/x-icon" />
                <meta property="og:site_name" content="Joseph Brown" />
                <meta name="og:title" content="Joseph Brown" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.josephbrown.io/default.png" />
                <title>Joseph Brown - Homepage</title>
            </Head>

        
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            </Box>
    )
}

export default Main 