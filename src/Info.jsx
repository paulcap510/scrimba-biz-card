import React from 'react';

function Info() {
    return (
        <div className="info-component">
            <p class="biz-card-name">Paul Capobianco</p>
            <p class="biz-card-title">Full-Stack Developer and UX Researcher</p>
            <p class="biz-card-site"><a href="https://www.paukcapo.com">www.paulcapo.com</a></p>
            <div class="buttons-div">
                <button class="my-button button1"><a href="mailto:paulcapob@gmail.com"><i class="fa fa-envelope"></i> Email</a></button>
                <button class="my-button button2"><a href="https://www.linkedin.com/in/pcapobianco/"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a></button>
                <button class="my-button button3"><a href="https://www.paulcapo.com"><i class="fa fa-user"></i> Website</a></button>
            </div>
        </div>

    );
}

export default Info 