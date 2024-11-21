import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function StudentInfo() {
    const [student, setStudent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/students/${id}`);
                const data = await response.json();
                setStudent(data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };

        fetchStudent();
    }, [id]);

    return (
        <div>
            <h1>Student Info</h1>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
        </div>
    );
}