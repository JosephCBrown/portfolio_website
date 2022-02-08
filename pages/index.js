import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue,Link,Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear} from '../components/bio'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a Backend developer based in the Bay Area!
            </Box>
            
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Joseph Brown
                </Heading>
                <p>Digital Constructor (MBA,MS Analytics / Developer / Avid Learner ) </p>
            </Box>
        <Box 
        flexShrink={0} 
        mt={{base: 4, md: 0}} 
        ml={{md: 6}} 
        align="center"
        >
        <Image 
        borderColor="whiteAlpha.800" 
        borderWidth={2} 
        borderStyle="solid" 
        maxWidth="100px" 
        display="inline-block" 
        borderRadius="full" 
        src="/images/.jpg" 
        alt="Profile Image" />
        </Box>     
            </Box>   
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <Paragraph>This is my about me section/ what I do. think of it like the elevator pitch or section from LinkedIn{' '} 
        <NextLink href="/works/">
            <link></link>
            </NextLink>
            .
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                    My portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in Berkeley, California.
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
          <BioYear>2017 to present</BioYear>
          Works at Five9 
        </BioSection>
        
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>   
        </Container>
    )
}

export default Page