import {ChakraProvider, Heading, Button, ButtonGroup, Box, Card, Text, Image, Grid, Flex} from '@chakra-ui/react';
import theme from "../theme"
import ss1 from "../Pictures/screenshots/ss1.png"
import ss2 from "../Pictures/screenshots/ss2.png"
import ss3 from "../Pictures/screenshots/ss3.png"
import ss4 from "../Pictures/screenshots/ss4.png"
import cover from "../Pictures/miscelaneous/cover.jpeg"
import bulbasaur from "../Pictures/icons/bulbasaur.gif"

function Home() {
    return (
        <div>
        <ChakraProvider theme={theme}>

            <Flex
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={4}
            m={6}>
            
            <Heading>
            Pokemon Emerald    
            </Heading>

                <h2>Synopsis</h2>
                <p>Pokémon Emerald is set in the region of Hoenn, where you play as a young Pokémon Trainer on a journey to become the Pokémon Champion. The story revolves around two villainous teams, Team Aqua and Team Magma, who seek to awaken the legendary Pokémon Kyogre and Groudon to reshape the world, either by expanding the oceans or increasing the landmass. However, their plans go awry, causing chaos in Hoenn’s climate.
                Your character must stop these teams, with the help of the legendary Pokémon Rayquaza, who has the power to calm both Kyogre and Groudon. Along the way, you'll challenge eight Gym Leaders, defeat the Elite Four, and compete in the Battle Frontier, a new post-game challenge exclusive to Pokémon Emerald.
                The game combines elements from Pokémon Ruby and Pokémon Sapphire while introducing new features, including updated graphics, improved battle mechanics, and an expanded storyline.</p>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <Image src={ss1} alt='Screenshot 1'/>
                <Image src={ss2} alt='Screenshot 1'/>
                <Image src={ss3} alt='Screenshot 1'/>
                <Image src={ss4} alt='Screenshot 1'/>
                </Grid>

                <h1>Cover</h1>
                <Image src={cover} alt='Cartridge Cover'/>
                <p>Release Date: 2004</p>
                <Image src={bulbasaur}></Image>

                

            






            </Flex>
        </ChakraProvider>
        </div>
    )
}

export default Home;