import React from 'react';
import { filters } from './Consts';

export default function Filter({currentFilter, onFilterChanged}) {
    const getStyle = (forFilter) => {
        const stilBtn = {backgroundColor: 'green'};
        return currentFilter === forFilter ? stilBtn : {};
    }

    const changeFilter = (newFilter) => {
        onFilterChanged(newFilter);
    }

    return (<p>
        <button style={getStyle(filters.ALL)} 
                onClick={() => changeFilter(filters.ALL)}>All</button>

        <button style={getStyle(filters.COMPLETED)} 
                onClick={() => changeFilter(filters.COMPLETED)}>Completed</button> 

        <button style={getStyle(filters.NOT_COMPLETED)} 
                onClick={() => changeFilter(filters.NOT_COMPLETED)}>Not completed</button>
      </p>);
}