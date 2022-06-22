import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue,Link,Button,List,ListItem,SimpleGrid,chakra } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
/*import Section from '../components/section'*/
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoTiktok } from 'react-icons/io5'
/*import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'*/
import Image from 'next/image' 

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
      <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a Backend developer based in the Bay Area!
            </Box>
            
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Joseph Brown
                </Heading>
                <p>Digital Constructor (EMBA,MS Analytics / Developer / Avid Learner ) </p>  
            </Box>
            <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >  
              <ProfileImage 
              src="/images/profileimage.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>     
        </Box>  
      </Box> 


        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <Paragraph>Joseph is an Analytics Professional with over 10 years of experience providing Data Insights for Finance and Technology Companies.  He has a keen interest in Software Development and building companies from the ground up. His curiosity to build things & solve problems has led to to extraordinary pathways{' '} 
        <NextLink href="/projects/">
            <link></link>
            </NextLink>
            .
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                    My Portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          {/* <BioYear>1990</BioYear>
          Born in Berkeley, California. */}
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Completed first Master&apos;s Program (Executive Master of Business Administration) in the Graduate School of
          Economics and Business Administration (SEBA)  at Saint Mary's College of California
          </BioSection>
          <BioSection>
          <BioYear>2016</BioYear> 
          Completed second Master&apos;s Program (Master of Science Business Analytics) in the Graduate School of
          Economics and Business Administration (SEBA)  at Saint Mary's College of California.
        </BioSection>
        
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Back End,SQL,& DevOps Developer with Python Bootcamp
        </BioSection>

        <BioSection>
          <BioYear>2017 to 2022</BioYear>
          Worked at Five9 as a Sr. Business Analyst and Sr. Financial Analyst
        </BioSection>

        <BioSection>
          <BioYear>2022 to present</BioYear>
          Work at Gong as a Marketing Analyst
        </BioSection>
        
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Work as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Intrests 
        </Heading>
        <Paragraph>
          Learning, Technology, Gaming, Blockchain, Artificial Intelligence, Machine Learning, Teaching
        </Paragraph>
        </Section> 
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JosephCBrown" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @JosephCBrown
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://www.tiktok.com/t/ZTdEE83yy/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTiktok />}
              >
                @JosephCBrown
              </Button>
            </Link>
          </ListItem>
        </List>

       {/*  <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            </SimpleGrid>thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
        
          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Posts
              </Button>
            </NextLink>
          </Box>
          </Section>
        </Container>
  </Layout>
    )
}

export default Page
export {getServerSideProps} from '../components/chakra'