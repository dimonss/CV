import React from "react";

const socialLinks = [
    {
        icon: (
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                 data-view-component="true" fill="white"
                 className="octicon octicon-mark-github v-align-middle color-fg-default">
                <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
        ),
        href: "https://github.com/dimonss",
        label: "github"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                 fill="white" role="img" width="16" height="16">
                <g>
                    <path
                        d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                        fill="white"></path>
                </g>
            </svg>
        ),
        href: "https://www.linkedin.com/in/dmitrii-chalysh-947457244/",
        label: "Linkedin"
    },
    {
        icon: (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16">
                <path
                    d="m29.919 6.163-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556 11.931-10.781c.519-.462-.113-.719-.806-.256l-14.75 9.288-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"/>
            </svg>
        ),
        href: "https://t.me/DiChLtd/",
        label: "Telegram"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                 fill="none" role="img" width="16" height="16">
                <g>
                    <path
                        d="M4.66536 0C2.0927 0 0 2.09464 0 4.66797V11.3346C0 13.9073 2.09464 16 4.66797 16H11.3346C13.9073 16 16 13.9054 16 11.332V4.66536C16 2.0927 13.9054 0 11.332 0H4.66536ZM12.6667 2.66667C13.0347 2.66667 13.3333 2.96533 13.3333 3.33333C13.3333 3.70133 13.0347 4 12.6667 4C12.2987 4 12 3.70133 12 3.33333C12 2.96533 12.2987 2.66667 12.6667 2.66667ZM8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4ZM8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29276 5.33333 8C5.33333 8.70724 5.61428 9.38552 6.11438 9.88562C6.61448 10.3857 7.29276 10.6667 8 10.6667C8.70724 10.6667 9.38552 10.3857 9.88562 9.88562C10.3857 9.38552 10.6667 8.70724 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61428 8.70724 5.33333 8 5.33333V5.33333Z"
                        fill="white"></path>
                </g>
            </svg>
        ),
        href: "https://www.instagram.com/dich.ga/",
        label: "Instagram"
    }
];

export default socialLinks
