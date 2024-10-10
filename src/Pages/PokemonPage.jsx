import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Box, Img, Center} from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChakraProvider, Heading, Image, Text, Grid, Flex, Progress } from "@chakra-ui/react";
import Papa from "papaparse";
import database from "../databases/pkmnlist.csv";

const importImages = import.meta.glob("../Pictures/def/*.png");

function PokemonPage() {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonDataList, setPokemonDataList] = useState([]);

    // CSV
    useEffect(() => {
        fetch(database)
            .then(response => response.text())
            .then(data => { 
                Papa.parse(data, {
                    header: true,
                    complete: function(results) {
                        setPokemonDataList(results.data);
                    }
                });
            })
            .catch(error => console.error('Error al cargar el archivo CSV:', error));
    }, []);

    // PKMN STATS
    useEffect(() => {
        const pokemon = pokemonDataList.find(p => p.name.toUpperCase() === name.toUpperCase());
        setPokemonData(pokemon); 
    }, [pokemonDataList, name]);

    // PKMN IMAGE
    const imageName = name.toUpperCase();
    const [imagePath, setImagePath] = useState("");
    useEffect(() => {
        const getImage = importImages[`../Pictures/def/${imageName}.png`];
        if (getImage) {
            getImage().then((module) => {
                setImagePath(module.default); 
            }).catch(() => {
                setImagePath(""); 
            });
        } else {
            setImagePath(""); 
        }
    }, [imageName]);

// Percentages -----------------------------------------------------------------------------------
// Verificar si pokemonData está definido antes de calcular los porcentajes
let hpPercentage, atkPercentage, defPercentage, satkPercentage, sdefPercentage, spPercentage;
if (pokemonData) {
    hpPercentage = (pokemonData.hp / 255) * 100;
    atkPercentage = (pokemonData.atk / 255) * 100;
    defPercentage = (pokemonData.def / 255) * 100;
    satkPercentage = (pokemonData.satk / 255) * 100;
    sdefPercentage = (pokemonData.sdef / 255) * 100;
    spPercentage = (pokemonData.speed / 255) * 100;
}

//-------------------------------------------------------------------------------------------------
    return (
        <ChakraProvider>
            <Box align="center" alignContent="center" bgColor="darkgreen">
                <Box
                    marginTop='5px'
                    backgroundColor={'white'}
                    m='4'
                    textAlign="center"
                    alignContent="center"
                    width='50%'>
                    
                    <Heading>{name}</Heading>

                    {imagePath ? (
                        <Image src={imagePath} alt={name} />
                    ) : (
                        <Text>Image not found</Text>
                    )}

                    {pokemonData ? (
                        <TableContainer>
                        <Table
                        size={"sm"}>
                        <Tbody>
                        <Tr>
                            <Td>HP:</Td>
                            <Td>{pokemonData.hp}</Td>
                            <Td><Progress value={hpPercentage}></Progress></Td>
                        </Tr>
                        <Tr>
                            <Td>ATK:</Td>
                            <Td>{pokemonData.atk}</Td>
                            <Td><Progress value={atkPercentage}></Progress></Td>
                        </Tr>
                        <Tr>
                            <Td>DEF:</Td>
                            <Td>{pokemonData.def}</Td>
                            <Td><Progress value={defPercentage}></Progress></Td>
                        </Tr>
                        <Tr>
                            <Td>S.ATK:</Td>
                            <Td>{pokemonData.satk}</Td>
                            <Td><Progress value={satkPercentage}></Progress></Td>
                        </Tr>
                        <Tr>
                            <Td>S.DEF:</Td>
                            <Td>{pokemonData.sdef}</Td>
                            <Td><Progress value={sdefPercentage}></Progress></Td>
                        </Tr>
                        <Tr>
                            <Td>SPD:</Td>
                            <Td>{pokemonData.speed}</Td>
                            <Td><Progress value={spPercentage}></Progress></Td>
                        </Tr>
                        </Tbody>
                        </Table>
                        </TableContainer>
                    ) : (
                        <Text>Stats not found</Text>
                    )}
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default PokemonPage;
