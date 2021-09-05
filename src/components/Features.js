import React from 'react';
import "../scss/_features.scss";
import FeatureData from "./FeaturesData";
import FeatureList from './FeaturesList';

function FeatureItem(FeatureData) {
    return (
      <FeatureList
        key={FeatureData.id}
        image={FeatureData.image}
        title={FeatureData.title}
        description={FeatureData.description}
      />
    );
  }


function Features(props) {
    return (
        <section className="features">
            {FeatureData.map(FeatureItem)}
        </section>
    )
}

export default Features
