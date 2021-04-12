import React from 'react';
import { Link } from 'react-router-dom';
import { filters, routes } from './Consts';

export default function Filter({currentFilter}) {
    const getStyle = (forFilter) => {
        const stilBtn = {backgroundColor: 'green'};
        return currentFilter === forFilter ? stilBtn : {};
    }

    return (<p>
        <Link to={routes.ALL}>
            <button style={getStyle(filters.ALL)}>All</button>
        </Link>
        
        <Link to={routes.COMPLETED}>
            <button style={getStyle(filters.COMPLETED)} >Completed</button> 
        </Link>

        <Link to={routes.NOT_COMPLETED}>
            <button style={getStyle(filters.NOT_COMPLETED)} >Not completed</button>
        </Link>
      </p>);
}