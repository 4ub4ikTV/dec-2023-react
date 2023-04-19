import React, {useEffect, useState} from 'react';
import axios from "axios";

import {albums} from "../../urls/urls";
import {Album} from "../Album/Album";

const Albums = () => {

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        axios(albums).then(value => value.data).then(value => setAlbum(value))
    }, [])

    return (
        <div>
            {album.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};