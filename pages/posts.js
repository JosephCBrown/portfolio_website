import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// incase I want to go back to smaller headings  <Heading as="h3" fontSize={20} mb={4}>
// My Posts

// </Heading>
const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" size="xl">
          My Posts

        </Heading>

            <Box textAlign="center" py={10} px={6}>
                This page is under construction and will house my blog posts
            </Box>
           
        </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

