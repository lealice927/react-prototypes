import React from 'react';


export default props => {
    console.log('scrapbook image props:', props);
    const { src, style } = props.about;

    return <img style={style} src={src} className="scrapbook-image" />
}