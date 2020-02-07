import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddedFeatures from '../components/AddedFeatures';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Total from '../components/Total';
import { addFeature, removeFeature } from '../actions/index.js'
import { useDispatch, useSelector } from 'react-redux';

const CarFeaturePage = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    
    const deleteFeature = item => {
        // dispatch an action here to remove an item
        dispatch(removeFeature(item));
        
      };
    
      const buyItem = item => {
        // dipsatch an action here to add an item
        dispatch(addFeature(item));
        
      };
    
      return (
        <div className="boxes">
          <div className="box">
            <Header car={state.car} additionalPrice={state.additionalPrice} />
            <AddedFeatures removeFeature={deleteFeature} additionalFeatures={state.additionalFeatures} car={state.car} />
          </div>
          <div className="box">
            <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
            <Total car={state.car} additionalPrice={state.additionalPrice} />
          </div>
        </div>
      );
    };
    
    // const mapStateToProps = (state) => {
    //   return {
    //     car: state.car,
    //     additionalFeatures: state.additionalFeatures,
    //     additionalPrice: state.additionalPrice,
    //   }
    // }
    
    export default CarFeaturePage;
    