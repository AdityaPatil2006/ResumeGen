import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import heroImg from "../assets/home.png";

const HeroSection = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box px="30px" mt="100px" w="55%" ml="30px">
        <Text
          fontSize="60px"
          fontWeight="extrabold"
          fontFamily="'Pacifico', cursive"
          color="purple.700"
        >
          Welcome to ResumeGen!
        </Text>
        <Text
          fontSize="45px"
          fontWeight="semibold"
          fontFamily="'Roboto', sans-serif"
          color="purple.600"
          mb={6}
        >
          Craft Your Perfect Resume in Minutes!
        </Text>
        <Text
          fontSize="20px"
          fontWeight="normal"
          fontFamily="'Poppins', sans-serif"
          color="gray.700"
        >
          At ResumeGen, we understand that your resume is more than just a
          document—it's your gateway to new opportunities. Whether you're
          starting your career, looking to make a change, or aiming for that
          next big promotion, we provide the tools and templates you need to
          stand out from the crowd.
        </Text>
      </Box>
      <Box>
        <Image src={heroImg} />
      </Box>
    </Flex>
  );
};

export default HeroSection;
