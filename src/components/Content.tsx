import React from 'react';
import Grid from '@mui/material/Grid';
import MainTitle from "./reusable/MainTitle";
import MainText from "./reusable/MainText";
import TimelineItem from "./reusable/TimelineItem";
import KSTULogoImg from "../images/KGUSTA.png";
import beelineLogoImg from "../images/BeeLine_logo.png";
import mbankLogoImg from "../images/mbank_logo.png";
import { useText } from '../constants/locales';

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
            <MainTitle>{useText('about.title')}</MainTitle>
            <MainText>
                {useText('about.description')}<br/><br/>
            </MainText>

            <MainTitle>{useText('education.title')}</MainTitle>
            <TimelineItem
                date={useText('education.bachelor.date')}
                title={useText('education.bachelor.title')}
                subtitle={useText('education.bachelor.subtitle')}
                description={useText('education.bachelor.description')}
            />
            <TimelineItem
                date={useText('education.master.date')}
                title={useText('education.master.title')}
                subtitle={useText('education.master.subtitle')}
                description={useText('education.master.description')}
            />

            <MainTitle>{useText('experience.title')}</MainTitle>
            <TimelineItem
                date={useText('experience.kstu.date')}
                title={useText('experience.kstu.title')}
                subtitle={useText('experience.kstu.subtitle')}
                description={useText('experience.kstu.description')}
                logo={KSTULogoImg}
            />
            <TimelineItem
                date={useText('experience.beeline.date')}
                title={useText('experience.beeline.title')}
                subtitle={useText('experience.beeline.subtitle')}
                description={useText('experience.beeline.description')}
                logo={beelineLogoImg}
            />
            <TimelineItem
                date={useText('experience.mbank.date')}
                title={useText('experience.mbank.title')}
                subtitle={useText('experience.mbank.subtitle')}
                description={useText('experience.mbank.description')}
                logo={mbankLogoImg}
                logoWidth={40}
            />

            <MainTitle>{useText('refresherCourses.title')}</MainTitle>
            <TimelineItem
                date={useText('refresherCourses.projectManagement.date')}
                title={useText('refresherCourses.projectManagement.title')}
                subtitle={useText('refresherCourses.projectManagement.subtitle')}
                description={useText('refresherCourses.projectManagement.description')}
            />
            <TimelineItem
                date={useText('refresherCourses.computerNetwork.date')}
                title={useText('refresherCourses.computerNetwork.title')}
                subtitle={useText('refresherCourses.computerNetwork.subtitle')}
                description={useText('refresherCourses.computerNetwork.description')}
            />
        </Grid>
    );
};

export default Content;