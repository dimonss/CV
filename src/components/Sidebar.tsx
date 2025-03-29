import React from 'react';
import Grid from '@mui/material/Grid';
import {experimentalStyled as styled} from "@mui/material/styles";
import photo from '../images/I.jpg';
import Section from './reusable/Section';
import Award from './reusable/Award';
import SocialLink from './reusable/SocialLink';
import socialLinks from '../constants/socialLinks'

const Item = styled('div')(({theme}) => {
    return {
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: '6px 12px',
        textAlign: 'left',
        color: '#233a5f',
        width: 'calc(100% - 24px)',
        marginBottom: '10px',
        borderRadius: 6,

    }
});

const styles = {
    container: {
        flexDirection: 'column',
        backgroundColor: "#233a5f",
        color: "#FFF",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '32px 16px 16px'
    },
    photoContainer: {
        overflow: 'hidden',
        borderRadius: '50%',
        width: '120px',
        height: '120px'
    },
    photo: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px'
    },
    title: {
        color: '#d2d2d2'
    },
    content: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'left'
    }
};

const Sidebar: React.FC = () => {
    return (
        <Grid container sx={styles.container}>
            <Grid mb={3} sx={styles.photoContainer}>
                <img style={styles.photo} src={photo} alt="my_photo" />
            </Grid>
            <Grid mb={1} sx={styles.name}>
                Chalysh Dmitrii
            </Grid>
            <Grid mb={3} sx={styles.title}>
                Frontend Developer
            </Grid>
            <Item>Bishkek, August 20, 1996</Item>
            <Item><a className="blue" href="tel:+996 225 55 35 11">+996 225 55 35 11</a></Item>
            <Item><a className="blue" href="tel:+996 705 55 35 11">+996 705 55 35 11</a></Item>
            <Item>faimos69@gmail.com</Item>
            <Item>Kyrgyzstan, Bishkek</Item>
            <Grid sx={styles.content} mt="12px">
                <Section title="Skills">
                    <ul>
                        <li>JS, HTML, CSS, Sass, Chrome DevTools, Git, Express.js, NGINX, SQL, Jest, Cypress</li>
                        <li>Scripting language: JavaScript, TypeScript, Python.</li>
                        <li>Framework/Library: React/Redux, MUI, Django etc.</li>
                    </ul>
                </Section>

                <Section title="Personal qualities">
                    <ul>
                        <li>Pedantry</li>
                        <li>Perseverance</li>
                        <li>Mindfulness</li>
                        <li>Sociability</li>
                    </ul>
                </Section>

                <Section title="Honor & award">
                    <Award
                        title="The best talk"
                        year="2020"
                        description="The 62nd International Network Scientific and Technical Conference 'Наука, техника и инженерное образование в цифровую эпоху: идеи и решения'"
                    />
                    <Award
                        title="Letter of thanks"
                        year="2021"
                        description="For professional implementation of partner integrations at Balance.kg, as well as responsible involvement in company processes beyond regular duties."
                    />
                </Section>

                <Section title="Hobbies & Interest">
                    <ul>
                        <li>Tech Meetups and Conferences</li>
                        <li>Design and Creativity</li>
                        <li>Fitness and Outdoor Activities</li>
                        <li>Music and Creative Arts</li>
                    </ul>
                </Section>

                <Section title="Links & Credentials">
                    <ul className="vcard-details">
                        {socialLinks.map((link, index) => (
                            <SocialLink key={index} {...link} />
                        ))}
                    </ul>
                </Section>
            </Grid>
        </Grid>
    );
};

export default Sidebar;