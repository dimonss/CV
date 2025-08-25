import React from 'react';
import Grid from '@mui/material/Grid';
import {experimentalStyled as styled} from "@mui/material/styles";
import photo from '../images/I.jpg';
import Section from './reusable/Section';
import Award from './reusable/Award';
import SocialLink from './reusable/SocialLink';
import socialLinks from '../constants/socialLinks';
import { getText } from '../constants/locales';

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
                {getText('personal.name')}
            </Grid>
            <Grid mb={3} sx={styles.title}>
                {getText('personal.title')}
            </Grid>
            <Item>{getText('personal.birthDate')}</Item>
            <Item><a className="blue" href={`tel:${getText('personal.phone1')}`}>{getText('personal.phone1')}</a></Item>
            <Item><a className="blue" href={`tel:${getText('personal.phone2')}`}>{getText('personal.phone2')}</a></Item>
            <Item>{getText('personal.email')}</Item>
            <Item>{getText('personal.location')}</Item>
            <Grid sx={styles.content} mt="12px">
                <Section title={getText('skills.title')}>
                    <ul>
                        <li>{getText('skills.skill1')}</li>
                        <li>{getText('skills.skill2')}</li>
                        <li>{getText('skills.skill3')}</li>
                    </ul>
                </Section>

                <Section title={getText('personalQualities.title')}>
                    <ul>
                        <li>{getText('personalQualities.quality1')}</li>
                        <li>{getText('personalQualities.quality2')}</li>
                        <li>{getText('personalQualities.quality3')}</li>
                        <li>{getText('personalQualities.quality4')}</li>
                    </ul>
                </Section>

                <Section title={getText('honorAwards.title')}>
                    <Award
                        title={getText('honorAwards.bestTalk.title')}
                        year={getText('honorAwards.bestTalk.year')}
                        description={getText('honorAwards.bestTalk.description')}
                    />
                    <Award
                        title={getText('honorAwards.letterOfThanks.title')}
                        year={getText('honorAwards.letterOfThanks.year')}
                        description={getText('honorAwards.letterOfThanks.description')}
                    />
                </Section>

                <Section title={getText('hobbies.title')}>
                    <ul>
                        <li>{getText('hobbies.hobby1')}</li>
                        <li>{getText('hobbies.hobby2')}</li>
                        <li>{getText('hobbies.hobby3')}</li>
                        <li>{getText('hobbies.hobby4')}</li>
                    </ul>
                </Section>

                <Section title={getText('links.title')}>
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