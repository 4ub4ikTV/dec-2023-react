import React from 'react';

const SpaceXRocket = ({launch}) => {
    return (
        <div>
            <li>
                <p>Назва місії: {launch.mission_name}</p>
                <p>Рік запуску: {launch.launch_year}</p>
                <p>Фото місії: <img src={launch.links.mission_patch_small} alt=""/></p>
            </li>
        </div>
    );
};

export {SpaceXRocket};