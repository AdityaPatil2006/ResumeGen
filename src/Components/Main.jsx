import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";
import About from "./BuildSteps/About";
import Education from "./BuildSteps/Education";
import Skills from "./BuildSteps/Skills";
import Work from "./BuildSteps/Work";
import Projects from "./BuildSteps/Projects";
import ResumePrint from "./ResumePreview/ResumePrint";

const Main = () => {
  const [aboutFormData, setAboutFormData] = useState({
    fullname: "John Doe",
    role: "Full Stack Developer",
    email: "johndoe123@gmail.com",
    phone: "8795432781",
    address: "Pune, MH",
    linkedin: "https://johndoe.com",
  });

  const [educationFormData, setEducationFormData] = useState([
    {
      degree: "Bachelor's in Computer Science",
      college: "ABC University",
      startyear: "2015",
      endyear: "2019",
      grade: "A",
    },
  ]);

  const [workFormData, setWorkFormData] = useState([
    {
      position: "Full Stack Developer",
      company: "Infotech",
      employmentType: "Full Time",
      startDate: "2025",
      endDate: "2047",
      description: "As a Software Developer",
    },
  ]);

  const [skills, setSkills] = useState([
    "Html",
    "CSS",
    "JS",
    "React",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Python",
    "Java",
    ".NET",
    "ChakraUI",
    "TailwindCSS",
  ]);

  const [projects, setProjects] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [themeColor, setThemeColor] = useState("purple.600");

  const aboutHandleChange = (e) => {
    const { name, value } = e.target;
    setAboutFormData({
      ...aboutFormData,
      [name]: value,
    });
  };

  // Reference for printing
  const resumePrintRef = useRef();

  // Print functionality
  const handlePrint = useReactToPrint({
    content: () => resumePrintRef.current,
  });

  // Function to handle profile image upload
  const handleProfileImageUpload = (image) => {
    setProfileImage(URL.createObjectURL(image));
  };

  // Function to change the theme color
  const handleThemeColorChange = (color) => {
    setThemeColor(color);
  };

  // Tab handling functions
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  // Education form handling
  const educationHandleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...educationFormData];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setEducationFormData(updatedEducation);
  };

  const addMoreEducation = () => {
    setEducationFormData([
      ...educationFormData,
      { degree: "", college: "", startyear: "", endyear: "", grade: "" },
    ]);
  };

  const removeEducation = (index) => {
    const updatedEducation = [...educationFormData];
    updatedEducation.splice(index, 1);
    setEducationFormData(updatedEducation);
  };

  // Work form handling
  const workHandleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWork = [...workFormData];
    updatedWork[index] = {
      ...updatedWork[index],
      [name]: value,
    };
    setWorkFormData(updatedWork);
  };

  const addMoreWork = () => {
    setWorkFormData([
      ...workFormData,
      {
        position: "",
        company: "",
        employmentType: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeWork = (index) => {
    const updatedWork = [...workFormData];
    updatedWork.splice(index, 1);
    setWorkFormData(updatedWork);
  };

  return (
    <div>
      <Box>
        <Text
          fontSize={40}
          textAlign="center"
          color="purple.600"
          fontFamily="fantasy"
        >
          Dashboard
        </Text>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="50px"
        mt="20px"
        mx="50px"
      >
        <Flex w="30%" justifyContent="space-evenly">
          {[
            "purple.600",
            "green.600",
            "blue.600",
            "gray.600",
            "red.600",
            "pink.600",
            "orange.500",
          ].map((color, index) => (
            <Box
              key={index}
              bg={color}
              rounded="full"
              boxSize="60px"
              cursor="pointer"
              onClick={() => handleThemeColorChange(color)}
            />
          ))}
        </Flex>
        <Button
          colorScheme="purple"
          leftIcon={<FontAwesomeIcon icon={faDownload} />}
          onClick={handlePrint}
        >
          Print Resume
        </Button>
      </Flex>

      <Flex px="50px" mt="20px">
        <Box width="60%">
          <Tabs
            index={tabIndex}
            onChange={handleTabChange}
            mt={8}
            width="890px"
          >
            <TabList width="690px">
              <Tab>About</Tab>
              <Tab>Education</Tab>
              <Tab>Skills</Tab>
              <Tab>Work</Tab>
              <Tab>Projects</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <About
                  aboutFormData={aboutFormData}
                  aboutHandleChange={aboutHandleChange}
                  onProfileImageUpload={handleProfileImageUpload}
                />
              </TabPanel>
              <TabPanel>
                <Education
                  educationFormData={educationFormData}
                  educationHandleChange={educationHandleChange}
                  addMoreEducation={addMoreEducation}
                  removeEducation={removeEducation}
                />
              </TabPanel>
              <TabPanel>
                <Skills skills={skills} setSkills={setSkills} />
              </TabPanel>
              <TabPanel>
                <Work
                  workFormData={workFormData}
                  workHandleChange={workHandleChange}
                  addMoreWork={addMoreWork}
                  removeWork={removeWork}
                />
              </TabPanel>
              <TabPanel>
                <Projects projects={projects} setProjects={setProjects} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box width="60%" ml={4}>
          <ResumePrint
            ref={resumePrintRef}
            aboutFormData={aboutFormData}
            educationFormData={educationFormData}
            workFormData={workFormData}
            skills={skills}
            projects={projects}
            profileImage={profileImage}
            themeColor={themeColor}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Main;
