import React from 'react';
import './scrapbook.css';
import imageData from './image_data.js';
import ScrapbookImage from './scrapbook_image';




export default props => {
    const images = imageData.map( (picture, index)=>{
        return(
            <ScrapbookImage key={index} about={picture}/>
        );
    } );

    return(
        <div className="scrapbook-container">
            {images}
        </div>
    );
}