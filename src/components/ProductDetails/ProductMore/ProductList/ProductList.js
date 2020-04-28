import React from 'react';
import { responsiveSettings } from '../../../../constants/carousel';
import { CarouselProvider } from '../../../../commons/CarouselProvider/CarouselProvider';


export const ProductList = ({ children, variant }) => {
    return (
        <div className={`row ${variant ? variant : ''}`}>
            <CarouselProvider settings={responsiveSettings}>
                { children }
            </CarouselProvider>
        </div>
    );
};