// import 'React' import { useEffect } from 'react'
//  {useEffect}

import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const DataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://swapi.dev/api/people?page=1');
                const result = await response.json();
                setData(result.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        };
        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mt-4">
            <h2>StarWars API</h2>
            <table className=" table-bordered table table-sm table-stripped ">
                <thead className="dark">
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair_Color</th>
                        <th>Skin_Color</th>
                        <th>Eye_Color</th>
                        <th>Birth_Year</th>
                        <th>Gender</th>
                        <th>Homeworld</th>
                        <th>Films</th>
                        <th>Species</th>
                        <th>Vehicles</th>
                        <th>Starships</th>
                        <th>Created</th>
                        <th>Edited</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person) => (
                        <tr key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.height}</td>
                            <td>{person.mass}</td>
                            <td>{person.hair_color}</td>
                            <td>{person.skin_color}</td>
                            <td>{person.eye_color}</td>
                            <td>{person.birth_year}</td>
                            <td>{person.gender}</td>
                            <td><a href="{person.homeworld}">{person.homeworld}</a></td>
                            <td><a href="{person.films}">{person.url}</a></td>
                            <td><a href="{person.species}">{person.species}</a></td>
                            <td><a href="{person.vehicles}">{person.vehicles}</a></td>
                            <td><a href="{person.starships}">{person.starships}</a></td>
                            <td>{person.created}</td>
                            <td>{person.edited}</td>
                            <td><a href="{person.url}">{person.url}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">

            </div>
        </div>
    )
}
export default DataTable;

