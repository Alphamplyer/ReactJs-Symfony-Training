import React from 'react';
import { render } from 'react-dom';
import  RepLogApp from './RepLog/RepLogApp';

const shouldShowHeart = true;
const itemOptions = [
    { id: 'cat', text: 'Cat' },
    { id: 'fat_cat', text: 'Bit Fat Cat' },
    { id: 'laptop', text: 'My Laptop' },
    { id: 'coffee_cup', text: 'Coffee Cup' },
    { id: 'invalid_option', text: 'Invalid Option (For Testing Error)' },
];

render(
    <RepLogApp withHeart={ shouldShowHeart } itemOptions={ itemOptions } />,
    document.getElementById('lift-stuff-app')
);