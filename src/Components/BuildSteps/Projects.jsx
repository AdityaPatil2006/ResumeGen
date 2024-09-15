import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const Projects = ({ projects, setProjects }) => {
  const [newProject, setNewProject] = useState({
    name: "",
    url: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: "", url: "", description: "" });
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <VStack spacing={4} align="start" width="70%">
      <Text fontSize="24px" fontWeight="bold">
        Projects
      </Text>
      <Box>
        <Input
          placeholder="Project Name"
          name="name"
          variant="outline"
          bg="purple.100"
          focusBorderColor="purple.600"
          value={newProject.name}
          onChange={handleChange}
          mb={2}
        />
        <Input
          placeholder="Project URL"
          name="url"
          variant="outline"
          bg="purple.100"
          focusBorderColor="purple.600"
          value={newProject.url}
          onChange={handleChange}
          mb={2}
        />
        <Input
          placeholder="Project Description"
          name="description"
          variant="outline"
          bg="purple.100"
          focusBorderColor="purple.600"
          value={newProject.description}
          onChange={handleChange}
          mb={2}
        />
        <Button
          colorScheme="teal"
          bg="purple.600"
          _hover={{ bg: "purple.700", transform: "scale(1.1)" }}
          onClick={addProject}
        >
          Add Project
        </Button>
      </Box>
      <VStack spacing={2} align="start" mt={4}>
        {projects.map((project, index) => (
          <Box key={index} borderWidth={1} p={4} borderRadius="md" width="100%">
            <HStack justify="space-between">
              <Box>
                <Text fontSize="18px" fontWeight="bold">
                  {project.name}
                </Text>
                <Link
                  fontSize="16px"
                  color="blue.500"
                  href={project.url}
                  isExternal
                >
                  {project.url}
                </Link>
                <Text mt={2}>{project.description}</Text>
              </Box>
              <IconButton
                icon={<FaTrashAlt />}
                colorScheme="red"
                onClick={() => removeProject(index)}
              />
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Projects;
