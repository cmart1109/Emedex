// First Imports -----------------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {ChakraProvider, Image, Box, Button, Flex, ButtonGroup, Stack, Img} from '@chakra-ui/react';
import Home from "./Pages/Home"
import Pokedex from "./Pages/Pokedex"
import theme from "./theme"
// Pictures ----------------------------------------------------------------------------------------
import header from "./Pictures/backgrounds/header.jpg"
import ic1 from "./Pictures/menu/home.png"
import ic2 from "./Pictures/menu/pokedex.png"
import ic3 from "./Pictures/menu/factory.png"

function App() {

  return (
<ChakraProvider theme={theme}>
<Router>
<Stack direction="row" align="center">
  <Box
    display='flex'
    alignItems='center'
    width='100%'
    py={10}
    bgImage={header}
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
  >
  <ButtonGroup gap={4} m='4'>
    <Button as={Link} to="/" fontSize='20' leftIcon={<img src={ic1} style={({ width:'64px', height:'64px'})}></img>} size='md' height='60px' width='180px' colorScheme="green">HOME</Button>
    <Button as={Link} to="/Pokedex" fontSize='20' leftIcon={<img src={ic2} style={({ width:'64px', height:'64px'})}></img>} size='md' height='60px' width='180px'colorScheme="green">POKEDEX</Button>
    <Button fontSize='20' leftIcon={<img src={ic3} style={({ width:'64px', height:'64px'})}></img>} size='md' height='60px' width='310px' colorScheme="green">BATTLE FACTORY STATS</Button>
  </ButtonGroup>
              
  </Box>
</Stack>

<Routes> 
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Pokedex" element={<Pokedex/>}></Route>
</Routes>
</Router>  
</ChakraProvider>

  )
}

export default App
