import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChakraProvider, Heading, Box, Image, Text } from "@chakra-ui/react";

const importImages = import.meta.glob("../Pictures/def/*.png");

function PokemonPage() {
    const { name } = useParams();
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

    return (
        <ChakraProvider>
            <Box align="center" width="50%">
                <Heading>{name}</Heading>
                {imagePath ? (
                    <Image src={imagePath} alt={name} />
                ) : (
                    <Text>Image not found</Text>
                )}
            </Box>
        </ChakraProvider>
    );
}

export default PokemonPage;
