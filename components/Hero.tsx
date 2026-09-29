import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
  <header className="home-opening" aria-labelledby="home-heading">
    <div className="section-frame">
      <div className="home-opening__masthead">
        <span>Independent software studio / Las Vegas, Nevada</span>
        <span>For iPhone, iPad & Mac</span>
      </div>
      <div className="home-opening__layout">
        <div className="home-opening__copy">
          <p className="section-kicker">Apps that mind their own business.</p>
          <h1 id="home-heading">AI that knows you.<br /><em>Not one that<br className="home-opening__break" /> watches you.</em></h1>
          <p className="home-opening__lead">
            You should be able to tell your software the whole story.
            Even the parts you would never post.
          </p>
          <p className="home-opening__detail">
            We build Apple apps that run their intelligence on your device.
            So you can let them in without letting your private life out.
          </p>
          <div className="home-opening__actions">
            <a className="button button--primary" href="#products">Meet the collection <ArrowDownRight size={18} aria-hidden="true" /></a>
            <Link className="text-link" to="/philosophy">Read the standard <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="home-opening__mark" aria-label="The cut: on your side of the glass">
          <span className="home-opening__slash" aria-hidden="true">/</span>
          <p>On your side<br />of the glass.</p>
        </div>
      </div>
      <div className="home-opening__foot">
        <Link to="/apps/echochamber"><span className="status-dot" aria-hidden="true" /> Echo Chamber is on the App Store <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <span>Nine more apps in development</span>
      </div>
    </div>
  </header>
);

export default Hero;
