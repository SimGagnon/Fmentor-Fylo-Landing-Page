import React from 'react'
import "../scss/_cta.scss";

function Cta() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section className="cta">
            <div className="cta__container">
                <div className="cta__text">
                    <h2>Get early access today</h2>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className="cta__inputs">
                    <input type="text" />
                    <button className="button" placeholder="email@example.com" onClick={handleSubmit}>Get Started For Free</button>
                </div>
            </div>
        </section>
    )
}

export default Cta
