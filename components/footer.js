import { Box, useColorModeValue } from '@chakra-ui/react'
import {Link} from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Joseph Brown. All Rights Reserved. 
        
        <Box align="center" opacity={0.3} fontSize="sm" >
          Inspired by 
          <Link href ="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama
          </Link>
        </Box>
    </Box>
      
  )
}

export default Footer