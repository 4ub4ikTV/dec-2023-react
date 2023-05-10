import {createSlice} from "@reduxjs/toolkit";

import {ICar, IError} from "../../interfaces";


interface IState {
    cars: ICar[],
    errors: IError,
    trigger: boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    errors: null,
    trigger: false,
    carForUpdate: null
};

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
});

const {actions, reducer: carReducer} = slice;

const carActions = {
    ...actions
}

export {
    carActions,
    carReducer
}