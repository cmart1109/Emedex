import { useParams } from "react-router-dom";

import { ChakraProvider, Heading, Box, Image, Text } from "@chakra-ui/react";


function PokemonPage() {
    const {name}  = useParams();
    
    return (
        <ChakraProvider>
        <Box
        align="center"
        width="50%">
            <Heading>{name}</Heading>
        </Box>
            
        </ChakraProvider>
        )
}

export default PokemonPage;