import React from 'react';

export const STANDARD_REFUSALS = [
  {
    title: 'Data has gravity.',
    description: 'A recording carries the people in the room. It should not have to leave the room for software to understand it. We bring the model to the device that holds the recording.',
  },
  {
    title: 'The cloud must earn its place.',
    description: 'A bank feed needs a bank connection. A transcript does not need an audience. Every connection needs a job, and you get to know what it carries before it happens.',
  },
  {
    title: 'Offline is the test.',
    description: 'Losing reception should not mean losing the work. Once the required models are installed, the core tools must keep going.',
  },
  {
    title: 'Your data belongs to you.',
    description: 'Your notes do not become ours because our software helped you write them. Keeping them, taking them elsewhere, or deleting them should never require our permission.',
  },
];

const AxiomScroller: React.FC = () => (
  <section id="principles" className="standard-refusals" aria-labelledby="principles-title">
    <div className="section-frame">
      <div className="section-index">
        <span>02 / Four refusals</span>
        <span>The Obsidian Ridge Labs standard</span>
      </div>

      <h2 id="principles-title" className="standard-refusals__heading">Privacy is what makes it <em>personal.</em></h2>
      <div className="standard-refusals__layout">
        <div className="standard-refusals__intro">
          <p>
            You cannot ask software to understand your life while editing out everything you
            cannot afford to share.
          </p>
          <p>
            We refuse The Trade. These are the decisions that follow.
          </p>
        </div>

        <ol className="standard-refusals__list">
          {STANDARD_REFUSALS.map((refusal, index) => (
            <li key={refusal.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{refusal.title}</h3>
                <p>{refusal.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default AxiomScroller;
