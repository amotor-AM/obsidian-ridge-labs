import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import MotionReveal from './home/MotionReveal';

const Philosophy: React.FC = () => (
  <section id="philosophy" className="premise-section" aria-labelledby="premise-title">
    <div className="section-frame">
      <div className="section-index section-index--dark">
        <span>01 / The premise</span>
        <span>Private by architecture</span>
      </div>

      <div className="premise-section__heading">
        <MotionReveal>
          <p className="section-kicker section-kicker--dark">A shorter path to intelligence</p>
          <h2 id="premise-title">
            The shortest distance between your data and AI is <em>zero.</em>
          </h2>
        </MotionReveal>

        <MotionReveal className="premise-section__intro" delay={0.08}>
          <p>
            Conversations, finances, plans, and private thoughts should not need a round trip
            through someone else’s infrastructure. We put useful intelligence on the hardware
            already in your hands—fast, available offline, and private by design.
          </p>
          <a href="#architecture" className="text-link text-link--dark">
            See how local works <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </MotionReveal>
      </div>

      <MotionReveal className="local-map" amount={0.35}>
        <div className="local-map__label local-map__label--top">DEVICE BOUNDARY / SECURE BY DEFAULT</div>
        <div className="local-map__outside" aria-hidden="true">
          <span>REMOTE CLOUD</span>
          <i />
        </div>
        <div className="local-map__path" aria-hidden="true">
          <div className="local-map__node local-map__node--input"><span>01</span><strong>Your input</strong><small>audio · text · records</small></div>
          <div className="local-map__line local-map__line--one"><i /></div>
          <motion.div
            className="local-map__processor"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            <span />
          </motion.div>
          <div className="local-map__core"><span>02</span><strong>Local AI</strong><small>Apple silicon</small></div>
          <div className="local-map__line local-map__line--two"><i /></div>
          <div className="local-map__node local-map__node--output"><span>03</span><strong>Your insight</strong><small>available immediately</small></div>
        </div>
        <p className="sr-only">
          Your input is processed by local AI on Apple silicon and becomes an insight without
          crossing the device boundary or requiring a remote cloud.
        </p>
        <div className="local-map__footer">
          <span><i /> CORE AI PATH: LOCAL</span>
          <span>NETWORK HOPS: 0</span>
          <span>CONTROL: YOURS</span>
        </div>
      </MotionReveal>

      <div className="premise-proof">
        {[
          ['No required account', 'Start using core features without creating an identity profile.'],
          ['No surveillance layer', 'No ads, advertising identifiers, or behavioral analytics SDKs in our apps.'],
          ['No hidden connection', 'Optional services are explained before you choose to enable them.'],
        ].map(([title, copy], index) => (
          <MotionReveal key={title} className="premise-proof__item" delay={index * 0.08}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </MotionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
