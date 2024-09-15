import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box mt="40px" bg="purple.300" fontSize="20px" p="30px" px="70px">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Text>© 2024 ResumeGen. Designed By</Text>
          <Text color="blue.700" ml="5px" fontWeight="bold">
            Aditya Patil
          </Text>
        </Flex>
        <Flex
          gap="20px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
        >
          <Text mb="10px">Connect with me:</Text>
          <Link href="https://github.com/AdityaPatil2006" isExternal>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <Link href="https://www.instagram.com/aditya_patil727/" isExternal>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
