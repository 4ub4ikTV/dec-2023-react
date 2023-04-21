import React, {FC} from 'react';

import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album: IAlbum
}

const Album: FC<IProps> = ({album}) => {

    const {id, title} = album;

    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Title - {title}</h3>
        </div>
    );
};

export {Album};