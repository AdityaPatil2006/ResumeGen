import { Box, Text, Input, Flex, Button } from "@chakra-ui/react";
import React from "react";

const Education = ({
  educationFormData,
  educationHandleChange,
  addMoreEducation,
  removeEducation,
}) => {
  return (
    <div>
      {educationFormData.map((education, index) => (
        <Box width="70%" key={index} mt="20px" borderBottom="1px solid gray">
          <Text mb={2} fontWeight="bold" color="gray.700">
            Degree
          </Text>
          <Input
            type="text"
            name="degree"
            placeholder={education.degree || "Enter degree"}
            onChange={(e) => educationHandleChange(index, e)}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
          <Text mb={2} fontWeight="bold" color="gray.700" mt="20px">
            College
          </Text>
          <Input
            type="text"
            name="college"
            placeholder={education.college || "Enter college"}
            onChange={(e) => educationHandleChange(index, e)}
            size="md"
            variant="outline"
            bg="purple.100"
            focusBorderColor="purple.600"
          />
          <Flex justifyContent="space-evenly" width="100%">
            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700" mt="20px">
                Start Year
              </Text>
              <Input
                type="number"
                name="startyear"
                placeholder={education.startyear || "Start Year"}
                onChange={(e) => educationHandleChange(index, e)}
                size="md"
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
                width="160px"
              />
            </Box>
            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700" mt="20px">
                End Year
              </Text>
              <Input
                type="number"
                name="endyear"
                placeholder={education.endyear || "End Year"}
                onChange={(e) => educationHandleChange(index, e)}
                size="md"
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
                width="160px"
              />
            </Box>
            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700" mt="20px">
                Grade
              </Text>
              <Input
                type="text"
                name="grade"
                placeholder={education.grade || "Enter Grade"}
                onChange={(e) => educationHandleChange(index, e)}
                size="md"
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
                width="160px"
              />
            </Box>
          </Flex>
          <Button
            onClick={() => removeEducation(index)}
            bg="red.500"
            color="white"
            mt="10px"
            _hover={{ bg: "red.600", transform: "scale(1.05)" }}
          >
            Remove
          </Button>
        </Box>
      ))}
      <Box mt="20px" borderTop="1px solid gray" width="600px">
        <Button
          onClick={addMoreEducation}
          bg="purple.600"
          color="white"
          mt="20px"
          _hover={{ bg: "purple.700", transform: "scale(1.1)" }}
        >
          Add More
        </Button>
      </Box>
    </div>
  );
};

export default Education;
