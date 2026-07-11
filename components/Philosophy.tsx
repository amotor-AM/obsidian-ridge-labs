import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import MotionReveal from './home/MotionReveal';

const facts = [
  ['Core AI', 'On-device'],
  ['Core workflows', 'Offline-ready'],
  ['Advertising profiles', 'None'],
  ['Optional connections', 'Explained first'],
];

const Philosophy: React.FC = () => (
  <section id="philosophy" className="premise-section" aria-labelledby="premise-title">
    <div className="section-frame">
      <div className="section-index section-index--dark">
        <span>01 / The premise</span>
        <span>Less movement. More control.</span>
      </div>

      <div className="premise-section__heading">
        <MotionReveal>
          <p className="section-kicker section-kicker--dark">A shorter path to intelligence</p>
          <h2 id="premise-title">
            Useful AI does not need a copy of your life <em>in the cloud.</em>
          </h2>
        </MotionReveal>

        <MotionReveal className="premise-section__intro" delay={0.08}>
          <p>
            Core intelligence runs on the Apple hardware you already own. Optional
            connections are explicit, and your private work stays under your control.
          </p>
          <a href="#architecture" className="text-link text-link--dark">
            See the architecture <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </MotionReveal>
      </div>

      <MotionReveal className="local-path" amount={0.3}>
        <div className="local-path__meta">
          <span>Core data path</span>
          <span>Inside your device boundary</span>
        </div>
        <div className="local-path__flow" aria-hidden="true">
          <div><span>01</span><strong>Your input</strong><small>Voice · text · records</small></div>
          <i><b /></i>
          <div><span>02</span><strong>Apple silicon</strong><small>Local intelligence</small></div>
          <i><b /></i>
          <div><span>03</span><strong>Useful result</strong><small>Ready where you are</small></div>
        </div>
        <p className="sr-only">
          Your input is processed with local intelligence on Apple silicon and becomes a useful
          result without requiring a remote server round trip.
        </p>
      </MotionReveal>

      <dl className="premise-facts">
        {facts.map(([term, value], index) => (
          <MotionReveal key={term} className="premise-fact" delay={index * 0.06}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </MotionReveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Philosophy;
