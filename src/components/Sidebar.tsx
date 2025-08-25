import React from 'react';
import Grid from '@mui/material/Grid';
import {experimentalStyled as styled} from "@mui/material/styles";
import photo from '../images/I.jpg';
import Section from './reusable/Section';
import Award from './reusable/Award';
import SocialLink from './reusable/SocialLink';
import socialLinks from '../constants/socialLinks';
import { useText } from '../constants/locales';

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
                {useText('personal.name')}
            </Grid>
            <Grid mb={3} sx={styles.title}>
                {useText('personal.title')}
            </Grid>
            <Item>{useText('personal.birthDate')}</Item>
            <Item><a className="blue" href={`tel:${useText('personal.phone1')}`}>{useText('personal.phone1')}</a></Item>
            <Item><a className="blue" href={`tel:${useText('personal.phone2')}`}>{useText('personal.phone2')}</a></Item>
            <Item>{useText('personal.email')}</Item>
            <Item>{useText('personal.location')}</Item>
            <Grid sx={styles.content} mt="12px">
                <Section title={useText('skills.title')}>
                    <ul>
                        <li>{useText('skills.skill1')}</li>
                        <li>{useText('skills.skill2')}</li>
                        <li>{useText('skills.skill3')}</li>
                    </ul>
                </Section>

                <Section title={useText('personalQualities.title')}>
                    <ul>
                        <li>{useText('personalQualities.quality1')}</li>
                        <li>{useText('personalQualities.quality2')}</li>
                        <li>{useText('personalQualities.quality3')}</li>
                        <li>{useText('personalQualities.quality4')}</li>
                    </ul>
                </Section>

                <Section title={useText('honorAwards.title')}>
                    <Award
                        title={useText('honorAwards.bestTalk.title')}
                        year={useText('honorAwards.bestTalk.year')}
                        description={useText('honorAwards.bestTalk.description')}
                    />
                    <Award
                        title={useText('honorAwards.letterOfThanks.title')}
                        year={useText('honorAwards.letterOfThanks.year')}
                        description={useText('honorAwards.letterOfThanks.description')}
                    />
                </Section>

                <Section title={useText('hobbies.title')}>
                    <ul>
                        <li>{useText('hobbies.hobby1')}</li>
                        <li>{useText('hobbies.hobby2')}</li>
                        <li>{useText('hobbies.hobby3')}</li>
                        <li>{useText('hobbies.hobby4')}</li>
                    </ul>
                </Section>

                <Section title={useText('links.title')}>
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