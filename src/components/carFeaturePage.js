import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddedFeatures from '../components/AddedFeatures';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Total from '../components/Total';
import { addFeature, removeFeature } from '../actions/index.js'

export const CarFeaturePage = (props) => {
    const removeFeature = item => {
        // dispatch an action here to remove an item
        props.removeFeature(item);
        
      };
    
      const buyItem = item => {
        // dipsatch an action here to add an item
        props.addFeature(item);
        console.log(item);
      };
    
      return (
        <div className="boxes">
          <div className="box">
            <Header car={props.car} additionalPrice={props.additionalPrice} />
            <AddedFeatures removeFeature={removeFeature} additionalFeatures={props.additionalFeatures} car={props.car} />
          </div>
          <div className="box">
            <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
            <Total car={props.car} additionalPrice={props.additionalPrice} />
          </div>
        </div>
      );
    };
    
    const mapStateToProps = (state) => {
      return {
        car: state.car,
        additionalFeatures: state.additionalFeatures,
        additionalPrice: state.additionalPrice,
      }
    }
    
    export default connect(mapStateToProps, { addFeature, removeFeature }) (CarFeaturePage);
    