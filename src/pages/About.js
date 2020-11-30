import React from 'react'
import './App.scss'

const About = () => {
    return (
        <div className="Page About">
            <h1>About Brewser</h1>
            <img src="https://images.pexels.com/photos/1267328/pexels-photo-1267328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="pic" />
            <p className="aboutBlurb">Brewser was born when three friends came together as a group for a project within their software development course. With a love for laughs, and a huge love for beer, they came together with an idea to re-imagine one of their favorite apps, but also develop an understanding for how full-stack web development happens. Welcome to Brewser! Come for the beers, stay for the community.</p>
            <p id="credits">Designed by Jane Cho, Lucy Franco, and Casey Jenkins</p>
        </div>
    )
}

export default About