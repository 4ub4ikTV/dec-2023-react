import React, {useEffect, useState} from 'react';
import {SpaceXRocket} from "../SpaceXRocket/SpaceXRocket";

const SpaceX = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(data => {
                const filteredLaunches = data.filter(launch => {
                    const launchYear = new Date(launch.launch_year).getFullYear();
                    return launchYear !== 2020;
                });
                setLaunches(filteredLaunches);
            });
    }, []);

    return (
        <div>
            <h1>Список запусків космічних кораблів (окрім 2020 року)</h1>
            <ul>
                {launches.map(launch => <SpaceXRocket key={launch.flight_number} launch={launch}/>)}
            </ul>
        </div>
    );
};

export {SpaceX};