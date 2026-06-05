import html2pdf from 'html2pdf.js';

export const generatePdf = async (name: string, currentLocale: string) => {
    // Get only the CV content (without buttons)
    const cvContent = document.querySelector('.cv-content') as HTMLElement | null;
    if (!cvContent) {
        throw new Error('CV content element not found');
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

    try {
        await html2pdf().set(options).from(clone).save();
    } finally {
        // Clean up
        document.body.removeChild(container);
    }
};
