import React, {PropsWithChildren} from 'react';
import Grid from '@mui/material/Grid';


const MainTitle = (props: PropsWithChildren) => {
    return (
        <Grid sx={{justifyContent: "flex-start", fontWeight: 'bold', marginBottom: '20px'}}>
            {props.children}
            <Grid
                sx={{position: 'absolut', background: '#233a5f', width: '100%', height: '3px', borderRadius: '3px'}}/>
        </Grid>
    );
};

export default MainTitle;