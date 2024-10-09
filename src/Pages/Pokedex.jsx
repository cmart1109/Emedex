import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Box} from '@chakra-ui/react'
import { ChakraProvider, Text, Heading, Flex, Image } from '@chakra-ui/react';
import Papa from "papaparse"
import { useEffect, useState } from 'react';
import database from "../databases/pkmnlist.csv"
function Pokedex() {

    const [pokemonDataList, setPokemonDataList] = useState([])
    useEffect(() => {
        fetch(database)
            .then(response => response.text())
            .then(data => { 
                Papa.parse(data, {
                    header: true,
                    complete: function(results) {
                        console.log("Se pudo crack");
                        setPokemonDataList(results.data);
                    }
                });
            })
            .catch(error => console.error('Error al cargar el archivo CSV:', error));
    }, []);

    return (
<ChakraProvider>

<Box
textAlign="center"
alignContent="center">
<Heading>Pokedex</Heading>
<Text>Here is the official Pokemon Emerald's Pokedex </Text>
<TableContainer>
    <Table size='md'>
    <Thead>
        <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>2nd Type</Th>
        </Tr>
    </Thead>
    <Tbody>
        {pokemonDataList.map((pokemon, index) => (
        <Tr key={index}>
            <Td>{pokemon.id}</Td>
            <Td
            display='flex'
            alignItems='center'>
                <Text>{pokemon.name}</Text>
            </Td>
            <Td>{pokemon.type1}</Td>
            <Td>{pokemon.type2}</Td>
        </Tr>
        ))}
    </Tbody>
    </Table>
</TableContainer>

</Box>

</ChakraProvider>
    )
}

export default Pokedex;