import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {ChakraProvider, Image, Box} from '@chakra-ui/react';
 import Home from "./Pages/Home"
 import Date from "./Pages/Date"
 import fondo from "../src/fondo.jpg"
 
function App() {

  return (
    <ChakraProvider>
      <Box
      width={"100%"}
      height={"200vh"}
      backgroundImage={`url(${fondo})`}
      backgroundSize={"cover"}
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundPosition={"center"}
      >
        
        <Image src="/bg.jpg" alt="Foto"></Image>
        <Router>
    <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/fecha" element={<Date/>}></Route>
</Routes>
</Router>
        </Box>
          
      
    </ChakraProvider>
  )
}

export default App
