import React from 'react';
import Stopwatch from './stopwatch';
import Time from './format_time';

export default (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Stopwatch</h1>
            <Stopwatch />
            <Time />
        </div>
    );
}

