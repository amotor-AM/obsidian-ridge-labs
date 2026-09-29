import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const remotePath = ['Your recording', 'Upload', 'Remote processing', 'Download', 'Your transcript'];

const Philosophy: React.FC = () => (
  <section id="philosophy" className="home-premise" aria-labelledby="premise-title">
    <div className="section-frame">
      <div className="section-index section-index--dark"><span>01 / The part you held back</span><span>Privacy is what makes it personal.</span></div>
      <div className="home-premise__layout">
        <h2 id="premise-title">What did<br />you <em>leave out?</em></h2>
        <div className="home-premise__copy">
          <p className="home-premise__lead">The name you deleted from the prompt. The journal entry you decided not to paste.</p>
          <p>Before the AI has even answered, you have changed the question to suit the company listening.</p>
          <p>That is <strong>The Trade</strong>: hand over your private life to get help with it.</p>
          <p className="home-premise__conviction">You should not have to edit yourself for your software.</p>
          <a href="#architecture" className="text-link text-link--dark">Run the Boundary Check <ArrowDownRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="home-paths">
        <figcaption>Start with one sentence. Where does it go to become a transcript?</figcaption>
        <div className="home-paths__remote">
          <span>Cloud transcription</span>
          <ol>{remotePath.map((step, index) => <li key={step}><small>{String(index + 1).padStart(2, '0')}</small>{step}</li>)}</ol>
        </div>
        <div className="home-paths__local">
          <span>Echo Chamber</span>
          <ol><li><small>01</small>Your recording</li><li><small>02</small>Your transcript</li></ol>
          <strong>Both on your device.</strong>
        </div>
        <p>Processing paths shown. Echo Chamber works on supported Apple hardware after model setup. Optional iCloud sync is a separate choice.</p>
      </figure>
    </div>
  </section>
);

export default Philosophy;
