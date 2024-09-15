import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Work = ({ workFormData, workHandleChange, addMoreWork, removeWork }) => {
  return (
    <Box width="600px">
      {workFormData.map((work, index) => (
        <Box key={index} mb="20px" p="20px">
          <Text fontSize="24px" fontWeight="bold" mb="10px">
            Work Experience {index + 1}
          </Text>
          <Stack spacing="10px">
            <FormControl>
              <FormLabel>Position</FormLabel>
              <Input
                name="position"
                value={work.position}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input
                name="company"
                value={work.company}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Employment Type</FormLabel>
              <Input
                name="employmentType"
                value={work.employmentType}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                name="startDate"
                value={work.startDate}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input
                type="date"
                name="endDate"
                value={work.endDate}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                value={work.description}
                onChange={(e) => workHandleChange(index, e)}
                variant="outline"
                bg="purple.100"
                focusBorderColor="purple.600"
              />
            </FormControl>
          </Stack>
          <Flex mt="10px" justifyContent="space-between">
            {index > 0 && (
              <Button colorScheme="red" onClick={() => removeWork(index)}>
                Remove Work Experience
              </Button>
            )}
            {index === workFormData.length - 1 && (
              <Button
                colorScheme="teal"
                bg="purple.600"
                _hover={{ bg: "purple.700", transform: "scale(1.1)" }}
                onClick={addMoreWork}
              >
                Add More Work Experience
              </Button>
            )}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Work;
