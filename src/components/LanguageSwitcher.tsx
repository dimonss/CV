import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useLocaleStore } from '../constants/locales';
import useIsMobile from '../hooks/useIsMobile';

const LanguageSwitcher: React.FC = () => {
  const { currentLocale, setLocale } = useLocaleStore();
  const isMobile = useIsMobile();

  const handleLanguageChange = (locale: 'en' | 'ru') => {
    setLocale(locale);
  };

  return (
    <ButtonGroup
      variant='outlined'
      size='small'
      sx={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        boxShadow: isMobile ? '3px 3px 10px #333' : null,
        '& .MuiButton-root': {
          borderColor: isMobile ? '#fff' : '#233a5f',
          '&:hover': {
            backgroundColor: '#233a5f',
            color: '#fff',
            borderColor: isMobile ? '#fff' : '#233a5f',
          },
        },
      }}
    >
      <Button
        onClick={() => handleLanguageChange('en')}
        sx={{
          backgroundColor: currentLocale === 'en' ? '#233a5f' : 'white',
          color: currentLocale === 'en' ? '#fff' : '#233a5f',
          '&:hover': {
            backgroundColor: currentLocale === 'en' ? '#1a2027' : '#233a5f',
            color: currentLocale === 'en' ? '#fff' : '#233a5f',
          },
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => handleLanguageChange('ru')}
        sx={{
          backgroundColor: currentLocale === 'ru' ? '#233a5f' : 'white',
          color: currentLocale === 'ru' ? '#fff' : '#1a2027',
          '&:hover': {
            backgroundColor: currentLocale === 'ru' ? '#1a2027' : '#233a5f',
            color: currentLocale === 'ru' ? '#fff' : '#233a5f',
          },
        }}
      >
        РУ
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
