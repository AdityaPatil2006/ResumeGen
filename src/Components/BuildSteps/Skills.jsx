import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Flex,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

const Skills = ({ skills, setSkills }) => {
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <Box width="70%">
      <Text mb={2} fontWeight="bold" color="gray.700">
        Skills
      </Text>
      <Flex mb={4}>
        <Input
          type="text"
          placeholder="Enter your skills"
          size="md"
          variant="outline"
          bg="purple.100"
          focusBorderColor="purple.600"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <Button
          bg="purple.600"
          color="whitesmoke"
          ml="10px"
          _hover={{ bg: "purple.700" }}
          onClick={handleAddSkill}
        >
          Add
        </Button>
      </Flex>
      <Box>
        {skills.map((skill, index) => (
          <Tag
            key={index}
            size="lg"
            variant="solid"
            colorScheme="purple"
            m="2px"
            borderRadius="full"
            cursor="pointer"
          >
            <TagLabel>{skill}</TagLabel>
            <TagCloseButton onClick={() => handleDeleteSkill(skill)} />
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
