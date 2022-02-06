import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg='MediumPurple' p={3} mb={6} align="center">
                Hello, I&apos;m a Backend developer based in the Bay Area!
            </Box>
            
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Joseph Brown
                </Heading>
                <p>Digital Constructor (MBA,MS Analytics / Developer / Avid Learner ) </p>
        </Box>      
        </Box>      
        </Container>
    )
}

export default Page