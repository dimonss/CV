import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useLocaleStore } from '../constants/locales';

const LanguageSwitcher: React.FC = () => {
  const { currentLocale, setLocale } = useLocaleStore();

  const handleLanguageChange = (locale: 'en' | 'ru') => {
    setLocale(locale);
  };

  return (
    <ButtonGroup 
      variant="outlined" 
      size="small" 
      sx={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000,
        '& .MuiButton-root': {
          borderColor: '#233a5f',
          color: '#233a5f',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#233a5f',
            color: '#fff',
            borderColor: '#233a5f'
          }
        }
      }}
    >
      <Button
        onClick={() => handleLanguageChange('en')}
        sx={{
          backgroundColor: currentLocale === 'en' ? '#233a5f' : 'white',
          color: currentLocale === 'en' ? '#fff' : '#233a5f',
          '&:hover': {
            backgroundColor: currentLocale === 'en' ? '#1a2027' : '#233a5f',
            color: '#fff'
          }
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => handleLanguageChange('ru')}
        sx={{
          backgroundColor: currentLocale === 'ru' ? '#233a5f' : 'white',
          color: currentLocale === 'ru' ? '#fff' : '#233a5f',
          '&:hover': {
            backgroundColor: currentLocale === 'ru' ? '#1a2027' : '#233a5f',
            color: '#fff'
          }
        }}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
