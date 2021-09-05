import React from 'react';
import "../scss/_about.scss";
import AboutEntry from "./AboutData";
import AboutList from './AboutList';

function AboutItem(AboutData) {
    return (
      <AboutList
        key={AboutData.id}
        image={AboutData.image}
        title={AboutData.title}
        description={AboutData.description}
      />
    );
  }


function About(props) {
    return (
        <section className="about">
            {AboutEntry.map(AboutItem)}
        </section>
    )
}

export default About
