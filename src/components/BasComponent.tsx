import { useState } from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {baseReducer, baseStateSelector, baseReducerWithAction} from "../slices/baseSlice";


export function BaseComponent() {

    const baseStateValue = useAppSelector(state => baseStateSelector(state));
    const dispatch = useAppDispatch();
    return (
        <div className="App">
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    onClick={() => dispatch(baseReducer())}
                    href="#"
                    className="bg-blue px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Dispatch and Action
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                    {baseStateValue}
                </a>
            </div>
        </div>
    )
}
