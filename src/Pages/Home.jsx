import {ChakraProvider, Heading, Box, Card, Text, Image, Flex} from '@chakra-ui/react';
import fondo from "../../public/brg.png"
import header from "../Pictures/header.jpg"
import theme from "../theme"
import ring from "../Pictures/ic1.png"

function Home() {
    return (
        <ChakraProvider theme={theme}>

            <Flex
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap="4">

  
            <Box 
            m={6} 
            backgroundImage={`url(${fondo})`} 
            rounded={"md"} 
            boxShadow='dark-lg'
            backgroundPosition={"bottom"}
            backgroundSize={"cover"} 
            width={"100%"}
            p='6'>
            <Image 
            mx={"auto"} 
            src={ring}
            boxSize={"70px"}
            />
            <Text textAlign={"center"}>Cordialmente les invitamos al:</Text>
            <Heading textAlign={'center'} alignContent={"center"}>Matrimonio Martinez Garcia</Heading>
            </Box>

            <Box
            display={"flex"}
            rounded={"md"} 
            boxShadow='dark-lg'
            backgroundImage={`url(${fondo})`}
            width={"100%"}
            height={"300px"}>
                <Image 
                src={header}
                boxSize='300px'
                />
                <Box
                m={6}
                >
                <Heading> Detalles</Heading>
                <Text>
                    Estamos felices de anunciarles que Hemos decidido unirnos en matrimonio, 
                    y deseamos que ustedes puedan ser participes de este
                    importante evento en nuestras vidas. 
                </Text>
                </Box>
            </Box>

            <Box
             m={6} 
             backgroundImage={`url(${fondo})`} 
             rounded={"md"} 
             boxShadow='dark-lg'
             backgroundPosition={"bottom"}
             backgroundSize={"cover"} 
             width={"100%"}
             p='6'>
                <Box
                textAlign={"center"}>
                    <Heading>Con la Querida Bendicion de nuestros Padres</Heading>
                </Box>
            </Box>





            </Flex>
        </ChakraProvider>
    )
}

export default Home;