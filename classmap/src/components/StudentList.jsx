import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);


    return (
        <div>
            <h1>Student List</h1>
            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                    <Link to={`/students/${student.id}`}>more info</Link>
                </div>
            ))}
        </div>
    );
}