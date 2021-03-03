import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const HookCakeContainer = () => {


    //with just 2 step
    const { numberOfCake } = useSelector(state => state.cake);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cake : {numberOfCake} </h2>
            <button onClick={() => dispatch(buyCake(1))} >Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer;
