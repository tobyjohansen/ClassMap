import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ClassList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/v1/classes");
                const data = await response.json();
                setClasses(data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <div>
            <h1>Liste of alle klasser</h1>
            {classes.map((klass) => (
                <div key={klass.id}>
                    <p>{klass.name}</p>
                    <Link to={`/klasser/${klass.id}`}>mer info</Link>
                </div>
            ))}
        </div>
    );
}