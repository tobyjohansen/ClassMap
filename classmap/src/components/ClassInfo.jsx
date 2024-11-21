import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ClassInfo() {
    const [Sclass, setSClass] = useState({});
    const { id } = useParams();

    useEffect(() => async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/classes/${id}`);
            const data = await response.json();
            setSClass(data);
        } catch (error) {
            console.error('Error fetching class:', error);
        }
    }, [id]);

    return (
        <div>
            <h1>Class Info</h1>
            <p>Klasse navn: {Sclass.name}</p>
            <p>Liste med elever</p>
            {Sclass.students && Sclass.students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                </div>
            ))}
        </div>
    );
}