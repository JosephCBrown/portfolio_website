import { Box, Heading, Text} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article'

function Info() {
  return (
    <Layout title="Tools">
        <Box textAlign="center" py={10} px={6} >
        <InfoOutlineIcon boxSize={'50px'} color={'purple.200'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
            Current Tools I Use
        </Heading>
        <Text color={'gray.500'}>
            Under Construction, this will list all of the tools I use to learn and invent with.
        </Text>
        <Heading as="h2" size="xl" mt={6} mb={2}>
        My Equipment
        </Heading>
        <Text color={'gray.500'}>
        Under Construction, this will list all of the hardware I use.
        </Text>
        </Box>
    </Layout>
    );
}
export default Info
export { getServerSideProps} from '../components/chakra'