import React from 'react';

interface SocialLinkProps {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
    <li itemProp="social">
        {icon}
        <a rel="noreferrer" target="_blank" href={href}>{label}</a>
    </li>
);

export default SocialLink; 