import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import MotionReveal from './home/MotionReveal';

const facts = [
  ['Core AI', 'On your device'],
  ['Core workflows', 'Work offline'],
  ['Advertising profiles', 'None'],
  ['Optional connections', 'Named first'],
];

const Philosophy: React.FC = () => (
  <section id="philosophy" className="premise-section" aria-labelledby="premise-title">
    <div className="section-frame">
      <div className="section-index section-index--dark">
        <span>01 / The problem</span>
        <span>Where your data actually goes</span>
      </div>

      <div className="premise-section__heading">
        <MotionReveal>
          <p className="section-kicker section-kicker--dark">The old deal</p>
          <h2 id="premise-title">
            Follow one voice note <em>across the internet.</em>
          </h2>
        </MotionReveal>

        <MotionReveal className="premise-section__intro" delay={0.08}>
          <p>
            Say one sentence into a typical AI app. Your words leave the room the second you
            speak. They cross a few company networks, wait in a queue on someone else&apos;s
            server, get logged, get copied, and become training material for a model that
            answers to everybody and owes you nothing.
          </p>
          <a href="#architecture" className="text-link text-link--dark">
            How our apps refuse the deal <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </MotionReveal>
      </div>

      <MotionReveal className="processing-paths" amount={0.2}>
        <div className="processing-path processing-path--cloud">
          <div className="processing-path__header">
            <div><span>Every other app</span><strong>Your voice takes the long way around.</strong></div>
            <small>Five stops</small>
          </div>
          <ol aria-label="How a cloud AI app handles your voice">
            <li><span>01</span><div><strong>Your voice</strong><small>Recorded, then sent away the moment you finish speaking</small></div></li>
            <li><span>02</span><div><strong>Their servers</strong><small>Processed on rented computers in another state</small></div></li>
            <li><span>03</span><div><strong>Their logs</strong><small>Copied and retained under policies you will never read</small></div></li>
            <li><span>04</span><div><strong>Their models</strong><small>Your words become training material for their product</small></div></li>
            <li><span>05</span><div><strong>A transcript returns</strong><small>Delivered back after the room has already been left</small></div></li>
          </ol>
        </div>
        <div className="processing-path processing-path--local">
          <div className="processing-path__header">
            <div><span>An Obsidian Ridge app</span><strong>Your voice stays in the room.</strong></div>
            <small>Two stops</small>
          </div>
          <ol aria-label="How an Obsidian Ridge Labs app handles your voice">
            <li><span>01</span><div><strong>Your voice</strong><small>Recorded on your iPhone</small></div></li>
            <li><span>02</span><div><strong>Your device</strong><small>Transcribed by the chip already in your hand</small></div></li>
          </ol>
          <p className="processing-paths__caption">Same transcript. One of these keeps your voice.</p>
        </div>
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
