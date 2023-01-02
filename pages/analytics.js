import { Container, Heading, Box} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { GridItem } from '../components/grid-item'

// incase I want to go back to smaller headings  <Heading as="h3" fontSize={20} mb={4}>
// My Posts

///</Heading>
const Analytics = () => (
    <Layout title="JCB-Analytics">
      <Container>
        <Heading as="h3" size="xl">
          JCB-Analytics

        </Heading>
            
             <Box textAlign="center" py={10} px={-6}>
            <script type='module' src='https://10az.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script><tableau-viz id='tableau-viz' src='https://10az.online.tableau.com/t/jcbanalytics/views/Contract_Dashboard_Final/DepartmentofCorrectionsRehabDashboard' width='1724' height='1764' hide-tabs toolbar='bottom' ></tableau-viz>
            </Box>
           
        </Container>
  </Layout>
)

export default Analytics
export { getServerSideProps } from '../components/chakra'

