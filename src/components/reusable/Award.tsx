import React from 'react';
import Grid from '@mui/material/Grid';

interface AwardProps {
    title: string;
    year: string;
    description: string;
}

const Award: React.FC<AwardProps> = ({ title, year, description }) => (
    <>
        <Grid sx={{ display: 'flex', justifyContent: "space-between", width: '100%', height: '20px' }} mt="12px">
            <h5>{title}</h5>
            <h5>{year}</h5>
        </Grid>
        <Grid sx={{ marginBottom: '12px', color: "#b6beca" }}>{description}</Grid>
    </>
);

export default Award; 