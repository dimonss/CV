import React from 'react';
import Grid from '@mui/material/Grid';
import MainTitle from "./reusable/MainTitle";
import MainText from "./reusable/MainText";
// @ts-ignore
import KSTULogoImg from "../images/KGUSTA.png";
// @ts-ignore
import beelineLogoImg from "../images/BeeLine_logo.png";
// @ts-ignore
import mbankLogoImg from "../images/mbank_logo.png";
import Box from '@mui/material/Box';

const Content = () => {
    return (
        <Grid container sx={{
            flexDirection: 'column',
            color: "#233a5f",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '16px'
        }}>
            <MainTitle>
                About
            </MainTitle>
            <MainText>
                Passionate and dedicated web developer with three years of hands-on experience in designing and
                implementing cutting-edge web applications and websites. With a strong foundation in front-end
                development technologies, I thrive in dynamic and collaborative environments where creativity
                and innovation are valued. My commitment to staying updated with the latest industry trends and
                technologies allows me to deliver high-quality solutions that meet both client needs and business
                objectives. Known for my problem-solving skills, attention to detail, I am eager to leverage my
                expertise to contribute to the success of innovative projects
                and drive business growth.<br/><br/></MainText>
            <MainTitle>
                Education
            </MainTitle>
            <Grid display={"flex"} width={'100%'} container mb={4}>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>2015-2018</Grid>
                <Grid item lg={10} sm={9} xs={12}>

                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>KSTU named after I.Razzakova</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}> Bachelor's degree in Computer Science
                        and Computer Science.</Box>
                    <Box ml={2}>
                        <MainText>
                            During my computer science studies, I gained a solid understanding of programming languages,
                            algorithms, and data structures. I worked on projects applying software development
                            methodologies, object-oriented programming, and database management. My education also
                            emphasized critical thinking and problem-solving, and I explored electives in web
                            development, mobile apps, and AI to broaden my skills.
                        </MainText>
                    </Box>
                </Grid>
            </Grid>
            <Grid display={"flex"} width={'100%'} container mb={2}>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>2018-2020</Grid>
                <Grid item lg={10} sm={9} xs={12}>
                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>KSTU named after I.Razzakova</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}> Master's degree in Computer Science
                        and Computer Science.</Box>
                    <Box ml={2}>
                        <MainText>During my master's in computer science, I explored advanced algorithms, data
                            structures, and software engineering. I participated in research and seminars, contributing
                            to innovative solutions and emerging technologies. Collaborating on projects enhanced my
                            understanding of complex programming concepts and sharpened my problem-solving skills,
                            preparing me for challenges in the field.</MainText>
                    </Box>
                </Grid>

            </Grid>
            <MainTitle>
                Experience
            </MainTitle>
            <Grid display={"flex"} width={'100%'} mb={2} container>
                <Grid item lg={2} sm={3} xs={12} sx={{textAlign: "left"}}>
                    <img src={KSTULogoImg} alt="KSTU logo"/>
                </Grid>
                <Grid item lg={10} sm={9} xs={12}>
                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>KSTU named after I.Razzakova</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} color={"#4f4f4f"}>Engineer | Sep 2018 - Sep 2020</Box>
                    <Box ml={2}>
                        <MainText>For the past two years, I have managed a computer lab, overseeing daily operations and
                            leading a team of technicians. My responsibilities included maintaining equipment, managing
                            the lab's budget, and ensuring all systems function smoothly. I've demonstrated leadership,
                            effective communication, and a commitment to excellence throughout my tenure.</MainText>
                    </Box>
                </Grid>
            </Grid>
            <Grid display={"flex"} width={'100%'} mb={2} container>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>
                    <img src={beelineLogoImg} alt="Beeline logo"/>
                </Grid>
                <Grid item lg={10} sm={9} xs={12}>
                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>Beeline kg</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}>Frontend developer | Dec 2020 - May
                        2024
                    </Box>
                    <Box ml={2}>
                        <MainText>
                            For the past three years, I have focused on web development, designing and maintaining web
                            applications and collaborating with cross-functional teams. I have implemented responsive
                            designs for optimal user experience across devices while staying updated with the latest
                            technologies and best practices in the field.</MainText>
                    </Box>
                </Grid>
            </Grid>
            <Grid display={"flex"} width={'100%'} mb={2} container>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>
                    <img src={mbankLogoImg} width={'40px'} alt="Mbank logo"/>
                </Grid>
                <Grid item lg={10} sm={9} xs={12}>
                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>MBANK</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}>Lead Frontend developer | jun
                        2024-till
                        now
                    </Box>
                    <Box ml={2}>
                        <MainText>Recently stepped into the Lead Frontend Developer role, managing a team of 5. My
                            responsibilities include guiding the team, overseeing architecture using React and MobX,
                            ensuring performance optimization, and delivering responsive designs. I collaborate closely
                            with designers and backend teams to meet business goals.</MainText>
                    </Box>
                </Grid>

            </Grid>
            <MainTitle>
                Refresher courses
            </MainTitle>
            <Grid display={"flex"} width={'100%'} container mb={4}>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>2018</Grid>
                <Grid item lg={10} sm={9} xs={12}>

                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>Certificate</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}>Software project management</Box>
                    <Box ml={2}>
                        <MainText>
                            In the Project Management courses, we studied the methods and tools necessary for successful
                            management of the software development lifecycle. We explored various project management
                            methodologies such as Agile, Waterfall, Scrum, and Kanban, and learned how to choose the
                            approach most suitable for a specific project. Additionally, we delved into project
                            planning, tracking, and control processes, as well as risk and resource management.
                            Throughout the courses, we engaged in practical exercises including creating project plans,
                            estimating time and resources, and managing teams and communication with stakeholders.
                        </MainText>
                    </Box>

                </Grid>
            </Grid>
            <Grid display={"flex"} width={'100%'} container mb={4}>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>2019</Grid>
                <Grid item lg={10} sm={9} xs={12}>

                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>Certificate</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}> Computer network</Box>
                    <Box ml={2}>
                        <MainText>
                            In the computer networking courses, we studied the fundamentals of network technologies,
                            including data transmission protocols, network architecture, configuration, and management
                            of network equipment. We also learned about routing principles, data routing and switching,
                            as well as network security. During the courses, we conducted practical sessions,
                            configuring and troubleshooting network equipment, as well as solving tasks related to
                            network diagnostics and fault correction

                        </MainText>
                    </Box>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Content;