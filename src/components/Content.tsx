import React from 'react';
import Grid from '@mui/material/Grid';
import MainTitle from "./reusable/MainTitle";
import MainText from "./reusable/MainText";
import TimelineItem from "./reusable/TimelineItem";
import KSTULogoImg from "../images/KGUSTA.png";
import beelineLogoImg from "../images/BeeLine_logo.png";
import mbankLogoImg from "../images/mbank_logo.png";
import { getText } from '../constants/locales';

const styles = {
    container: {
        flexDirection: 'column',
        color: "#233a5f",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '16px'
    }
};

const Content: React.FC = () => {
    return (
        <Grid container sx={styles.container}>
            <MainTitle>{getText('about.title')}</MainTitle>
            <MainText>
                {getText('about.description')}<br/><br/>
            </MainText>

            <MainTitle>{getText('education.title')}</MainTitle>
            <TimelineItem
                date={getText('education.bachelor.date')}
                title={getText('education.bachelor.title')}
                subtitle={getText('education.bachelor.subtitle')}
                description={getText('education.bachelor.description')}
            />
            <TimelineItem
                date={getText('education.master.date')}
                title={getText('education.master.title')}
                subtitle={getText('education.master.subtitle')}
                description={getText('education.master.description')}
            />

            <MainTitle>{getText('experience.title')}</MainTitle>
            <TimelineItem
                date={getText('experience.kstu.date')}
                title={getText('experience.kstu.title')}
                subtitle={getText('experience.kstu.subtitle')}
                description={getText('experience.kstu.description')}
                logo={KSTULogoImg}
            />
            <TimelineItem
                date={getText('experience.beeline.date')}
                title={getText('experience.beeline.title')}
                subtitle={getText('experience.beeline.subtitle')}
                description={getText('experience.beeline.description')}
                logo={beelineLogoImg}
            />
            <TimelineItem
                date={getText('experience.mbank.date')}
                title={getText('experience.mbank.title')}
                subtitle={getText('experience.mbank.subtitle')}
                description={getText('experience.mbank.description')}
                logo={mbankLogoImg}
                logoWidth={40}
            />

            <MainTitle>{getText('refresherCourses.title')}</MainTitle>
            <TimelineItem
                date={getText('refresherCourses.projectManagement.date')}
                title={getText('refresherCourses.projectManagement.title')}
                subtitle={getText('refresherCourses.projectManagement.subtitle')}
                description={getText('refresherCourses.projectManagement.description')}
            />
            <TimelineItem
                date={getText('refresherCourses.computerNetwork.date')}
                title={getText('refresherCourses.computerNetwork.title')}
                subtitle={getText('refresherCourses.computerNetwork.subtitle')}
                description={getText('refresherCourses.computerNetwork.description')}
            />
        </Grid>
    );
};

export default Content;