import React from 'react';
import ColorList from './ColorList';

function ColorItem(props) {
    return (
        <li style={{color: props.color}}>{props.color}</li>
    );
}

export default ColorItem;