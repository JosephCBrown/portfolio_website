import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My Posts

        </Heading>

            <Box>
                This page is under construction and will house my blog posts
            </Box>
           
        </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

