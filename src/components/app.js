import React from 'react';
import Table from './table';

export default (props) => {

const students = [
    {
        name: 'Rick Sanchez',
        course: 'Astrophysics',
        grade: '100'
    },
    {
        name: 'Morty Smith',
        course: 'Psychology',
        grade: '80'
    },
    {
        name: 'Bob Builder',
        course: 'Woodshop',
        grade: '88' 
    },
];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students} />
        </div>
    )
}

