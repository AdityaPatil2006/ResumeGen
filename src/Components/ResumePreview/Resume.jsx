import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Badge,
} from "@chakra-ui/react";
import demoProfile from "../../assets/demoProfile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Resume = ({
  aboutFormData,
  educationFormData,
  workFormData,
  skills,
  projects,
  profileImage,
  themeColor,
}) => {
  return (
    <Box
      maxW="800px"
      maxH="1000px"
      overflow="auto"
      p={6}
      border="1px solid #e2e8f0"
      borderRadius="lg"
      bg="gray.50"
      boxShadow="md"
    >
      <Flex p={4} align="center" borderBottom="2px solid #e2e8f0" mb={6}>
        <Image
          src={profileImage || demoProfile}
          alt="Profile"
          boxSize="120px"
          borderRadius="full"
          border={`3px solid ${themeColor}`}
        />
        <Box ml={4}>
          <Text fontSize="36px" fontWeight="bold" color={themeColor}>
            {aboutFormData.fullname}
          </Text>
          <Text fontSize="20px" color="gray.700">
            {aboutFormData.role}
          </Text>
        </Box>
      </Flex>

      <Flex
        bg={themeColor}
        color="white"
        justify="space-around"
        p={4}
        borderRadius="md"
        mb={6}
      >
        <Text>
          <FontAwesomeIcon icon={faEnvelope} /> {aboutFormData.email}
        </Text>
        <Text>
          <FontAwesomeIcon icon={faPhone} /> {aboutFormData.phone}
        </Text>
        <Text>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {aboutFormData.address}
        </Text>
        <Text>
          <FontAwesomeIcon icon={faLinkedin} /> {aboutFormData.linkedin}
        </Text>
      </Flex>

      <Flex>
        <Box width="50%">
          <Box mb={6}>
            <Text fontSize="24px" fontWeight="bold" color={themeColor}>
              Education
            </Text>
            <Divider my={3} />
            {educationFormData.map((education, index) => (
              <Box key={index} mb={4}>
                <Text fontWeight="bold">{education.degree}</Text>
                <Text>{education.college}</Text>
                <Text>
                  {education.startyear} - {education.endyear}
                </Text>
                <Text>Grade: {education.grade}</Text>
              </Box>
            ))}
          </Box>

          <Box mb={6}>
            <Text fontSize="24px" fontWeight="bold" color={themeColor}>
              Work Experience
            </Text>
            <Divider my={3} />
            {workFormData.map((work, index) => (
              <Box key={index} mb={4}>
                <Text fontWeight="bold">{work.position}</Text>
                <Text>{work.company}</Text>
                <Text>
                  {work.startDate} - {work.endDate}
                </Text>
                <Text>Employment Type: {work.employmentType}</Text>
                <Text>{work.description}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box width="50%">
          <Box mb={6}>
            <Text fontSize="24px" fontWeight="bold" color={themeColor}>
              Skills
            </Text>
            <Divider my={3} />
            <Wrap>
              {skills.map((skill, index) => (
                <WrapItem key={index}>
                  <Badge bg={themeColor} color="white" p={2} rounded="md">
                    {skill}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Box mb={6}>
            <Text fontSize="24px" fontWeight="bold" color={themeColor}>
              Projects
            </Text>
            <Divider my={3} />
            {projects.map((project, index) => (
              <Box key={index} mb={4}>
                <Text fontWeight="bold">{project.name}</Text>
                <Text>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: themeColor, textDecoration: "underline" }}
                  >
                    {project.url}
                  </a>
                </Text>
                <Text>{project.description}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Resume;
