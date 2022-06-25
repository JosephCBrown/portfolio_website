import { Box,Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { WorkGridItem } from '../components/grid-item'

/*import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
 */

/*"page now called projects previously called work or works"*/
{/* <Heading as="h3" size="xl" fontSize={20} mb={4}>
Projects

</Heading> */}
const Projects = () => (
    <Layout title="Projects">
      <Container >
        <Heading as="h3" size="xl">
          Projects
          
        </Heading>
            <Box textAlign="center" py={10} px={6}>
                This page is under construction and will house projects I am currently working on. Please see my github for project history.
            </Box>
{/*
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop"thumbnail={src=undefined}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={src}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
  
          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={src}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={src} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}

      </Container>
    </Layout>
  )
export default Projects
export { getServerSideProps } from '../components/chakra'