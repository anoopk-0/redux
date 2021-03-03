import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const CakeContainer = ({ buyCake, numberOfCake, amount }) => {
    console.log(amount)
    return (
        <div>
            <h2>Number of Cake : {numberOfCake} </h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    );
}


//get state as a parameter and return a object
const mapStateToProps = (state, ownProps) => {
    console.log('own props', ownProps)
    return {
        numberOfCake: state.cake.numberOfCake
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        buyCake: () => dispatch(buyCake(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
