import React, { useState } from 'react';
import { selectVehicle } from '../actions/index.js'
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const [cars, setCars] = useState({
        carsArray:
        [ 
            {
                price: 26395,
                name: '2019 Chevy Corvette',
                image:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-03-01-at-12-58-06-pm-2-1519927263.png',
                features: []  
            },
            {
                price: 26395,
                name: '2019 Nissan GTR',
                image:
                'https://content.autotrader.com/content/dam/autotrader/articles/Cars/Nissan/GT-R/2019/2019NissanGT-R/2019%20Nissan%20GT-R%20(1).jpg',
                features: []
            }
                
        ]
    })

    const carSelector = () => {
        dispatch(selectVehicle(cars.carsArray[0]))
    }
    return (
        <>
            <div>
                <button onClick={carSelector}>change cars</button>
            </div>
        </>
    )
}

export default HomePage;