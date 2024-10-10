import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Box, Img, Center} from '@chakra-ui/react'
import { ChakraProvider, Text, Heading, Flex, Image } from '@chakra-ui/react';
import Papa from "papaparse"
import { useEffect, useState } from 'react';
import database from "../databases/pkmnlist.csv"
import './Pokedex.css'
import background from "../Pictures/backgrounds/bg.png"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
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

    const getTypeClass = (type) => {
        switch (type) {
            case 'Grass':
                return 'grass';
            case 'Fire':
                return 'fire';
            case 'Water':
                return 'water';
            case 'Poison':
                return 'poison';
            case 'Normal':
                return 'normal';
            case 'Flying':
                return 'flying';
            case 'Ground':
                return 'ground';
            case 'Bug':
                return 'bug';
            case 'Rock':
                return 'rock';
            case 'Electric':
                return 'electric';
            case 'Fighting':
                return 'fighting';
            case 'Ghost':
                return 'ghost';
            case 'Dark':
                return 'dark';
            case 'Psychic':
                return 'psychic';
            case 'Ice':
                return 'ice';
            case 'Dragon':
                return 'dragon';
            case 'Steel':
                return 'steel'
            

            default:
                return 'defaultType';
        }
    };

    return (
<ChakraProvider>
<Box
align="center"
alignContent="center"
bgColor="darkgreen">
<Box
marginTop='5px'
backgroundColor={'white'}
m='4'
textAlign="center"
alignContent="center"
width='50%'>
<Heading>Pokedex</Heading>
<p>Here is the official Pokemon Emerald's Pokedex </p>
<TableContainer>
    <Table 
    backgroundColor={'white'}
    align='center'
    size='sm'
    width='50%'
    border='2px'>
    <Thead backgroundColor='gray'>
        <Tr>
            <Th color={'white'}>#</Th>
            <Th color={'white'}>Name</Th>
            <Th color={'white'}>Type</Th>
            <Th color={'white'}>2nd Type</Th>
        </Tr>
    </Thead>
    <Tbody>
        {pokemonDataList.map((pokemon, index) => (
        <Tr key={index}>
            <Td>{pokemon.id}</Td>
            <Td
            display='flex'
            alignItems='center'>
                <Text as={Link} to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Text>
            </Td>
            <Td className={getTypeClass(pokemon.type1)}>{pokemon.type1}</Td> 
            <Td className={getTypeClass(pokemon.type2)}>{pokemon.type2}</Td> 

        </Tr>
        ))}
    </Tbody>
    </Table>
</TableContainer>

</Box>
</Box>
</ChakraProvider>
    )
}


export default Pokedex;