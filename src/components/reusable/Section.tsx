import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <>
        <h3>{title}</h3>
        {children}
    </>
);

export default Section; 