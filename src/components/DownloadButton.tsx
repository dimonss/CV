import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Tooltip, Box, keyframes } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { generatePdf } from '../utils/generatePdf';
import useIsMobile from '../hooks/useIsMobile';
import { useLocaleStore, useText } from '../constants/locales';

const bounceArrow = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(10px);
    }
`;

const DownloadButton: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const isMobile = useIsMobile();
    const { currentLocale } = useLocaleStore();
    const downloadText = useText('download.tooltip');
    const buttonText = useText('download.button');
    const name = useText('personal.name');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('showDownloadButton')) {
            setShowArrow(true);
        }
    }, []);

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            await generatePdf(name, currentLocale);
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const removeQueryParam = () => {
        const url = new URL(window.location.href);
        url.searchParams.delete('showDownloadButton');
        window.history.replaceState({}, '', url.toString());
    };

    const handleButtonClick = () => {
        setShowArrow(false);
        removeQueryParam();
        handleDownload();
    };

    const handleArrowClick = () => {
        setShowArrow(false);
        removeQueryParam();
    };

    return (
        <>
            {showArrow && (
                <Box
                    onClick={handleArrowClick}
                    sx={{
                        position: 'fixed',
                        top: '8px',
                        right: '250px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 1000,
                        animation: `${bounceArrow} 0.8s ease-in-out infinite`,
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            fontSize: '48px',
                            color: '#233a5f',
                            '@media (max-width: 899px)': {
                                color: 'white',
                            },
                            fontWeight: 'bold',
                            textShadow: '0 3px 6px rgba(0,0,0,0.3)',
                        }}
                    >
                        →
                    </Box>
                </Box>
            )}
            <Tooltip title={downloadText} placement="bottom">
                <Button
                    onClick={handleButtonClick}
                    disabled={isLoading}
                    variant="contained"
                    startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
                    sx={{
                        position: 'fixed',
                        top: '20px',
                        right: '110px',
                        backgroundColor: 'white',
                        boxShadow: isMobile ? '3px 3px 10px #333' : '0 2px 8px rgba(0,0,0,0.15)',
                        border: isMobile ? '1px solid #fff' : '1px solid #233a5f',
                        color: '#233a5f',
                        height: '32px',
                        padding: '6px 16px',
                        fontSize: '13px',
                        fontWeight: 500,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#233a5f',
                            color: '#fff',
                        },
                        '&:disabled': {
                            backgroundColor: 'white',
                            color: '#233a5f',
                        },
                        'svg':{
                          margin: 0,
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Tooltip>
        </>
    );
};

export default DownloadButton;

