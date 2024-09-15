import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box px={10} py={5} color="purple.500">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="50px" fontWeight="bold" fontFamily="'Aladin',cursive">
            ResumeGen
          </Text>
        </Box>
        <Flex justifyContent="space-evenly" w="700px" alignItems="center">
          <Link
            color={"black"}
            fontSize="30px"
            href="#home"
            px={2}
            py={1}
            rounded="md"
            transition="all 0.3s ease"
            _hover={{
              color: "purple.500",
              transform: "scale(1)",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Link
            color={"black"}
            fontSize="30px"
            href="#templates"
            px={2}
            py={1}
            rounded="md"
            transition="all 0.3s ease"
            _hover={{
              color: "purple.500",
              transform: "scale(1)",
              fontWeight: "bold",
            }}
          >
            Templates
          </Link>
          <Link
            color={"black"}
            fontSize="30px"
            href="#about"
            px={2}
            py={1}
            rounded="md"
            transition="all 0.3s ease"
            _hover={{
              color: "purple.500",
              transform: "scale(1)",
              fontWeight: "bold",
            }}
          >
            About
          </Link>
          <Button
            bg="purple.500"
            color={"white"}
            w="150px"
            ml={4}
            fontSize="25px"
            _hover={{ bg: "purple.600" }}
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
