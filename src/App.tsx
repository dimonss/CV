import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
    return (
        <div className="App">
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{xs: 1, md: 1}} columns={{xs: 4, sm: 8, md: 8}}
                      display={"flex"}
                      sx={{justifyContent: "center"}}
                >
                    <Grid item xs={8} sm={6} md={2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={6}>
                        <Content/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
