import React, { useState } from 'react';
import { IconButton, CircularProgress, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';
import useIsMobile from '../hooks/useIsMobile';
import { useLocaleStore, useText } from '../constants/locales';

const DownloadButton: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useIsMobile();
    const { currentLocale } = useLocaleStore();
    const downloadText = useText('download.tooltip');
    const name = useText('personal.name');

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
                    orientation: 'landscape' as const,
                },
                pagebreak: { mode: 'avoid-all' as const },
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

    return (
        <Tooltip title={downloadText} placement="left">
            <IconButton
                onClick={handleDownload}
                disabled={isLoading}
                sx={{
                    position: 'fixed',
                    top: '20px',
                    right: '110px',
                    backgroundColor: 'white',
                    boxShadow: isMobile ? '3px 3px 10px #333' : '0 2px 8px rgba(0,0,0,0.15)',
                    border: isMobile ? '1px solid #fff' : '1px solid #233a5f',
                    color: '#233a5f',
                    width: '30px',
                    height: '30px',
                    '&:hover': {
                        backgroundColor: '#233a5f',
                        color: '#fff',
                    },
                    '&:disabled': {
                        backgroundColor: 'white',
                        color: '#233a5f',
                    },
                    '& svg': {
                        margin: '0 auto',
                    },
                }}
            >
                {isLoading ? (
                    <CircularProgress size={20} color="inherit" />
                ) : (
                    <DownloadIcon/>
                )}
            </IconButton>
        </Tooltip>
    );
};

export default DownloadButton;

