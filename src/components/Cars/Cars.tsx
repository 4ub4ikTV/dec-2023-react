import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {Car} from "../Car/Car";

interface IProps {
    cars: ICar[],
    setCarForUpdate: IUseState<ICar | null>,
    setUpdateCars: IUseState<boolean>
}

const Cars: FC<IProps> = ({cars, setUpdateCars, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                  setUpdateCars={setUpdateCars}/>)}
        </div>
    );
};

export {Cars};