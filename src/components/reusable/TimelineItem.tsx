import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainText from './MainText';

interface TimelineItemProps {
    date: string;
    title: string;
    subtitle?: string;
    description: string;
    logo?: string;
    logoWidth?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({date, title, subtitle, description, logo, logoWidth}) => (
    <Grid display="flex" width="100%" container mb={2}>
        <Grid item lg={2} sm={3} xs={12} mb={1} sx={{textAlign: "left"}}>
            {logo ? <img src={logo} width={logoWidth || 60} alt={`${title} logo`}/> : date}
        </Grid>
        <Grid item lg={10} sm={9} xs={12}>
            <Grid display="flex" alignItems="center" mb={1}>
                <Box sx={{backgroundColor: "#e5e5e5", borderRadius: "50%", width: '10px', height: "10px"}} mr={1}/>
                <Grid sx={{textAlign: "left", fontWeight: 'bold'}}>{title}</Grid>
            </Grid>
            {subtitle && <Box textAlign="left" ml={2} mb={1}
                              sx={{color: "#4f4f4f"}}>{`${subtitle}${date && logo ? (" | " + date) : ""}`}</Box>}
            <Box ml={2}>
                <MainText>{description}</MainText>
            </Box>
        </Grid>
    </Grid>
);

export default TimelineItem; 