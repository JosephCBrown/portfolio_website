import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoBuild } from 'react-icons/io5'
import { IoDesktop } from 'react-icons/io5'
import { IoHardwareChip } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? 'grassPurple' : undefined}
          color={active ? '#202023' : inactiveColor}
          _target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }

  const Navbar = props => {
    const { path } = props
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
  
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/projects" path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            >
              <IoBuild />
              Projects
            </LinkItem>
            <LinkItem href="/posts" path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            >
            <IoDesktop />
              Posts
            </LinkItem>
            <LinkItem
              _target="_blank"
              href="https://github.com/JosephCBrown"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              Github
            </LinkItem>
            
            <LinkItem
              _target="_blank"
              href="https://www.linkedin.com/in/joseph-c-brown/"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoLinkedin/>
              LinkedIn
            </LinkItem>
            <LinkItem href="/tools" path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            >
              <IoHardwareChip />
              Tools/Equipment
            </LinkItem>
          </Stack>
  
          <Box flex={1} align="right">
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/JosephCBrown" passHref>
                  <MenuItem as={Link}>Github</MenuItem>
                </NextLink>
                <NextLink href="https://www.linkedin.com/in/joseph-c-brown/" passHref>
                  <MenuItem as={Link}>Linkedin</MenuItem>
                </NextLink>
                <NextLink href="/tools" passHref>
                  <MenuItem as={Link}>Tools/Equipment</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://josephbrown.io"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}


export default Navbar