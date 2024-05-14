import React from 'react';
import Grid from '@mui/material/Grid';
import MainTitle from "./reusable/MainTitle";
import MainText from "./reusable/MainText";
// @ts-ignore
import KSTULogoImg from "../images/KGUSTA.png";
// @ts-ignore
import BeelineLogoImg from "../images/BeeLine_logo.png";
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
                Eduction
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
                            During my undergraduate studies in computer science, I acquired a comprehensive
                            understanding of various programming languages, algorithms, and data structures. Throughout
                            the program, I actively engaged in coursework focused on software development methodologies,
                            object-oriented programming, and database management systems. I participated in hands-on
                            projects and collaborative assignments, where I gained practical experience in designing and
                            implementing software solutions to real-world problems.
                            <br/>
                            <br/>
                            In addition to technical skills, my education emphasized critical thinking,
                            problem-solving,
                            and analytical reasoning, which are essential for success in the field of programming. I
                            also had the opportunity to explore elective courses in specialized areas such as web
                            development, mobile application development, and artificial intelligence, further
                            broadening
                            my knowledge and skillset.
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
                        <MainText>During my master's studies in computer science, I delved into advanced topics and
                            specialized areas within the realm of programming. This included in-depth exploration of
                            advanced algorithms, data structures, and software engineering methodologies. I actively
                            participated in research projects and seminars, where I had the opportunity to contribute to
                            the development of cutting-edge solutions and explore emerging technologies. Collaborating
                            with peers and faculty members on various projects enriched my understanding of complex
                            programming concepts and honed my analytical and problem-solving skills. My master's
                            education provided me with a solid foundation in advanced programming principles and
                            prepared me to tackle complex challenges in the dynamic field of computer
                            science.</MainText>
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
                    <Box textAlign={"left"} ml={2} mb={1} color={"#4f4f4f"}>Engineer | 2018-2020
                        now</Box>
                    <Box ml={2}>
                        <MainText>
                            Two years, I have served as the manager of a computer laboratory, where I have been
                            responsible for overseeing its daily operations and ensuring its efficient and effective
                            functioning. My duties have included managing a team of technicians and support staff,
                            delegating tasks, and providing guidance and support as needed. I have been instrumental in
                            maintaining the lab's equipment and infrastructure, ensuring that all systems are up-to-date
                            and running smoothly. Additionally, I have been responsible for managing the lab's budget,
                            allocating resources appropriately, and ensuring that all expenditures are within budgetary
                            constraints. Throughout my tenure, I have demonstrated strong leadership skills, effective
                            communication, and a commitment to excellence in all aspects of my work
                        </MainText>
                    </Box>
                </Grid>
            </Grid>
            <Grid display={"flex"} width={'100%'} mb={2} container>
                <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>
                    <img src={BeelineLogoImg} alt="KSTU logo"/>
                </Grid>
                <Grid item lg={10} sm={9} xs={12}>
                    <Grid display={"flex"} alignItems={'center'} mb={1}>
                        <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}}
                             mr={1}/>
                        <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>Beeline kg</Grid>
                    </Grid>
                    <Box textAlign={"left"} ml={2} mb={1} sx={{color: "#4f4f4f"}}>Frontend developer | 2020-till
                        now
                    </Box>
                    <Box ml={2}>
                        <MainText>
                            Over the past three years, I have been actively engaged in web development, honing my
                            skills
                            and gaining valuable experience in the field. My responsibilities have included designing,
                            developing, and maintaining various web applications and websites. I have collaborated
                            closely with
                            cross-functional teams, including designers and project managers, to ensure the successful
                            delivery
                            of projects. Additionally, I have been involved in the implementation of responsive and
                            adaptive
                            designs, ensuring optimal user experience across different devices and screen sizes.
                            Throughout my
                            journey as a web developer, I have remained committed to staying updated with the latest
                            technologies and best practices in the industry, continuously seeking opportunities for
                            growth and
                            improvement in my craft
                        </MainText>
                    </Box>
                </Grid>

            </Grid>
            <MainTitle>
                Refresher courses
            </MainTitle>
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
        </Grid>
    );
};

export default Content;