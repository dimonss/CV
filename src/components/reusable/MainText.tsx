import React, {PropsWithChildren} from 'react';
import Grid from '@mui/material/Grid';


const MainText = (props: PropsWithChildren) => (
    <Grid sx={{textAlign: 'left', color: "#9a9a9a",}}>
        {props.children}
    </Grid>)

export default MainText