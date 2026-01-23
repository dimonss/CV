import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Tooltip, Box, keyframes } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';
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
            // Get only the CV content (without buttons)
            const cvContent = document.querySelector('.cv-content') as HTMLElement | null;
            if (!cvContent) {
                console.error('CV content element not found');
                return;
            }

            // Clone the element to avoid modifying the original
            const clone = cvContent.cloneNode(true) as HTMLElement;

            // Create a temporary container with proper styling
            const container = document.createElement('div');
            container.style.cssText = `
                position: absolute;
                left: -9999px;
                top: 0;
                width: 1024px;
                background: white;
            `;
            container.appendChild(clone);
            document.body.appendChild(container);

            const options = {
                margin: [0, 0, 0, 0] as [number, number, number, number],
                filename: `${name.replace(/\s+/g, '_')}_CV_${currentLocale.toUpperCase()}.pdf`,
                image: { type: 'jpeg' as const, quality: 0.98 },
                html2canvas: {
                    scale: 3,
                    useCORS: true,
                    letterRendering: true,
                    logging: false,
                    backgroundColor: '#ffffff',
                },
                jsPDF: {
                    unit: 'mm' as const,
                    format: 'a3' as const,
                },
                pagebreak: { mode: 'avoid' as const },
                enableLinks: true,
            };

            await html2pdf().set(options).from(clone).save();

            // Clean up
            document.body.removeChild(container);
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
                    startIcon={isLoading ? <CircularProgress size={26} color="inherit" /> : <DownloadIcon />}
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
                    }}
                >
                    {buttonText}
                </Button>
            </Tooltip>
        </>
    );
};

export default DownloadButton;

