//El nombre del componente empieza con mayúsculas.
//Ver los snippets de la extensión de react para ahorrar escribir líneas de código cono rcc, rcp, etc. Más útil Rafce

import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return(
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignContent="center" gap={"2"}>
          <Box p="2" color="white" alignContent={"center"}>
            <Heading>Tienda Pixel Beads</Heading>
          </Box>
          <Spacer />
        </Flex>
      </Container>
      <Container maxW="50rem" bg="white" color="#333333">
      <Flex alignContent="center" gap={"2"}>
          <Box p="2" color="black">
            <Menu>
              <MenuButton>Videojuegos</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>Videojuego 1</MenuItem>
                <MenuItem as='a' href='#'>Videojuego 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              <MenuButton>Anime</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>Anime 1</MenuItem>
                <MenuItem as='a' href='#'>Anime 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              <MenuButton>Caricaturas</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>Serie 1</MenuItem>
                <MenuItem as='a' href='#'>Serie 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              <MenuButton>3D</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>3D 1</MenuItem>
                <MenuItem as='a' href='#'>3D 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              <MenuButton>Cuadros</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>Cuadro 1</MenuItem>
                <MenuItem as='a' href='#'>Cuadro 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  )
};

export default NavBar