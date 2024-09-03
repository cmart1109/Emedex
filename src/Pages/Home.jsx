import {ChakraProvider, Heading, Box, Card, Text} from '@chakra-ui/react';
import fondo from "../../public/brg.png"

function Home() {
    return (
        <ChakraProvider>
            <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            height={"100vh"}
            gap="4">


            <Box 
            m={2} 
            backgroundImage={`url(${fondo})`} 
            rounded={"md"} 
            boxShadow='dark-lg'
            backgroundPosition={"center"} 
            p='6'>
            <Heading textAlign={['left', 'center']} size='lg' fontSize={'40px'} fontFamily="initial" alignContent={"center"}>Nuestro Para Siempre Comienza Hoy</Heading>
            </Box>

            <Card
            backgroundImage={`url(${fondo})`}
            padding={"10px"}
            height={"300px"}
            width={"50%"}>
                <Heading> Fecha</Heading>
                <Text>
                    Acompáñanos al Evento que cambiará nuestras vidas
                </Text>
            </Card>
            </Box>
        </ChakraProvider>
    )
}

export default Home;