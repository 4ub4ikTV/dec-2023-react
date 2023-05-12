import React, {FC} from 'react';
import {CarForm, Cars} from "../components";

interface IProps {

}

const CarPage: FC<IProps> = () => {

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};