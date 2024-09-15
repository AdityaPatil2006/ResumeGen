import React, { useRef } from "react";
import { Input, Button, Text, Flex, Box } from "@chakra-ui/react";

const About = ({ aboutFormData, aboutHandleChange, onProfileImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      onProfileImageUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      <Input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        onClick={handleFileUploadClick}
        bg="white"
        colorScheme="none"
        width="70%"
        fontSize="20px"
        color="purple.600"
        border="2px solid #805AD5"
        _hover={{ bg: "#805AD5", color: "white" }}
      >
        Upload File
      </Button>

      <Flex mt={4} width="70%" justifyContent="space-between">
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            Full Name
          </Text>
          <Input
            type="text"
            name="fullname"
            placeholder={aboutFormData.fullname}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            Role
          </Text>
          <Input
            type="text"
            name="role"
            placeholder={aboutFormData.role}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
      </Flex>

      <Flex mt={4} width="70%" justifyContent="space-between">
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            Email
          </Text>
          <Input
            type="text"
            name="email"
            placeholder={aboutFormData.email}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            Phone
          </Text>
          <Input
            type="text"
            name="phone"
            placeholder={aboutFormData.phone}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
      </Flex>

      <Flex mt={4} width="70%" justifyContent="space-between">
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            Address
          </Text>
          <Input
            type="text"
            name="address"
            placeholder={aboutFormData.address}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold" color="gray.700">
            LinkedIn
          </Text>
          <Input
            type="text"
            name="linkedin"
            placeholder={aboutFormData.linkedin}
            onChange={aboutHandleChange}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default About;
