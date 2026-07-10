import React from 'react';
import { motion } from 'framer-motion';

interface ProductVisualProps {
  productId: string;
}

const EchoVisual = () => (
  <div className="product-visual product-visual--echo" aria-hidden="true">
    <div className="echo-screen echo-screen--back">
      <div className="echo-screen__bar" />
      <div className="echo-wave echo-wave--quiet">
        {[18, 34, 52, 28, 62, 42, 70, 38, 58, 24, 46, 30].map((height, index) => (
          <span key={index} style={{ height }} />
        ))}
      </div>
      <div className="echo-copy-lines">
        <span /><span /><span /><span />
      </div>
    </div>

    <motion.div
      className="echo-screen echo-screen--front"
      animate={{ y: [0, -8, 0], rotate: [-1.5, -0.5, -1.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="echo-live-row"><i /> Live transcription</div>
      <div className="echo-time">00:38:12</div>
      <div className="echo-wave">
        {[22, 48, 74, 38, 82, 54, 94, 42, 72, 30, 62, 46, 84, 34, 58, 26].map((height, index) => (
          <motion.span
            key={index}
            style={{ height }}
            animate={{ scaleY: [0.55, 1, 0.7] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: index * 0.045, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="echo-transcript">
        <div><b>AK</b><p>The key decision is what stays on the device.</p></div>
        <div><b>JL</b><p>Everything that matters.</p></div>
      </div>
    </motion.div>
  </div>
);

const VaultVisual = () => (
  <div className="product-visual product-visual--vault" aria-hidden="true">
    <div className="vault-balance">
      <span>Safe to spend</span>
      <strong>$2,480</strong>
      <small>through Aug 01</small>
    </div>
    <div className="vault-chart">
      <div className="vault-grid" />
      <motion.div
        className="vault-area"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="vault-dot" />
    </div>
    <div className="vault-foot"><span>ON-DEVICE FORECAST</span><i>Updated now</i></div>
  </div>
);

const MolehillVisual = () => (
  <div className="product-visual product-visual--molehill" aria-hidden="true">
    <div className="molehill-label">ONE STEP. THAT'S ENOUGH.</div>
    <div className="molehill-task">
      <span>01</span>
      <strong>Open the project brief</strong>
      <i />
    </div>
    <div className="molehill-queue">
      <div><span>02</span><b>Underline the first decision</b></div>
      <div><span>03</span><b>Write one possible answer</b></div>
    </div>
  </div>
);

const MindVisual = () => (
  <div className="product-visual product-visual--mind" aria-hidden="true">
    <div className="mind-date">THURSDAY · 9:42 PM</div>
    <p>I felt clear after the long walk today. The pattern is becoming hard to miss.</p>
    <div className="mind-connection">
      <span>LOCAL INSIGHT</span>
      <strong>Outdoor time often precedes your most focused evenings.</strong>
    </div>
    <div className="mind-orbit mind-orbit--one" />
    <div className="mind-orbit mind-orbit--two" />
  </div>
);

const NexusVisual = () => (
  <div className="product-visual product-visual--nexus" aria-hidden="true">
    <div className="nexus-line nexus-line--one" />
    <div className="nexus-line nexus-line--two" />
    <div className="nexus-node nexus-node--primary"><span>DECISION</span><b>Launch now?</b></div>
    <motion.div
      className="nexus-node nexus-node--risk"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    ><span>RED TEAM</span><b>What breaks at 10×?</b></motion.div>
    <div className="nexus-node nexus-node--outcome"><span>OUTCOME</span><b>Stage the rollout</b></div>
  </div>
);

const ProductVisual: React.FC<ProductVisualProps> = ({ productId }) => {
  if (productId === 'echochamber') return <EchoVisual />;
  if (productId === 'vault') return <VaultVisual />;
  if (productId === 'molehill') return <MolehillVisual />;
  if (productId === 'mind') return <MindVisual />;
  return <NexusVisual />;
};

export default ProductVisual;
