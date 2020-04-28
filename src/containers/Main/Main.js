import React from 'react';
import { useEffect } from 'react';

export const Main = ({ children }) => {
    useEffect(() => {
        document.body.getAttribute('class') && document.body.removeAttribute('class');
    });

    return (
        <main id="main" className="main">
            {children}
        </main>
    );
};