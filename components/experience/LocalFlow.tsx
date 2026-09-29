import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const details = [
  { name: 'Capture', caption: 'Your starting point', text: 'A recording. A training log. A set of study notes. The context comes from you, on the device you already own.' },
  { name: 'Process', caption: 'The model comes to you', text: 'Core AI runs on supported Apple hardware. Your input does not need to become a request to an external AI service.' },
  { name: 'Keep', caption: 'Useful, without the round trip', text: 'The result stays available on your device. Model setup, purchases, and optional connections have their own disclosed requirements.' },
];

export default function LocalFlow() {
  const [mode, setMode] = useState<'local' | 'cloud'>('local');
  const [selected, setSelected] = useState(1);
  const id = useId().replace(/:/g, '');
  return <section className="vx-boundary vx-frame" aria-labelledby="boundary-title">
    <div className="vx-section-top"><span className="vx-eyebrow">02 / The architecture</span><span className="vx-eyebrow">Follow the data</span></div>
    <div className="vx-boundary-heading"><h2 id="boundary-title" data-reveal-words>The intelligence moves.<br /><span>Your life stays here.</span></h2><p>Most AI asks you to send the context to the model. We bring the model to the context.</p></div>
    <div className="vx-flow" data-mode={mode}>
      <div className="vx-flow-controls" role="group" aria-label="Compare processing paths"><button aria-pressed={mode === 'local'} onClick={() => setMode('local')}>On your device<span>01</span></button><button aria-pressed={mode === 'cloud'} onClick={() => setMode('cloud')}>Typical cloud AI<span>02</span></button></div>
      <div className="vx-flow-diagram">
        <svg viewBox="0 0 900 460" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
          <title id={`${id}-title`}>{mode === 'local' ? 'The local processing path' : 'A simplified cloud processing path'}</title>
          <desc id={`${id}-desc`}>{mode === 'local' ? 'Input, model, and result are inside the device boundary.' : 'Input is sent across the device boundary to external processing and a result returns.'}</desc>
          <defs><pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#1A1A1C" strokeWidth=".65" /></pattern></defs>
          <rect x="15" y="15" width="870" height="430" fill={`url(#${id}-grid)`} />
          <g className="vx-device"><rect x="110" y="75" width="540" height="315" rx="16" /><rect x="128" y="93" width="504" height="266" rx="3" /><path d="M75 390H685L665 407H95Z" /><circle cx="380" cy="84" r="1.5" /></g>
          <text x="151" y="126" className="vx-svg-micro">YOUR APPLE DEVICE</text><text x="610" y="126" textAnchor="end" className="vx-svg-micro">LOCAL BOUNDARY</text>
          <g className="vx-local-path"><path d="M220 230H380H545" /><path d="M545 230V306H220V230" /></g>
          <g className="vx-cloud-path"><path d="M220 230L320 176L550 180L760 118" /><path d="M760 118L817 248L545 230" /><path d="M760 118L842 65M760 118L685 38M817 248L855 338" /></g>
          <g className="vx-external-nodes"><circle cx="760" cy="118" r="24" /><path d="M750 118H770M760 108V128" /><circle cx="817" cy="248" r="10" /><circle cx="842" cy="65" r="3" /><circle cx="685" cy="38" r="3" /><circle cx="855" cy="338" r="3" /><text x="760" y="162" textAnchor="middle" className="vx-svg-micro">EXTERNAL MODEL</text></g>
          {[220, 380, 545].map((x, index) => <g key={x} data-step={index} className={`vx-flow-node ${selected === index ? 'is-active' : ''}`}><rect x={x - 25} y="205" width="50" height="50" rx="4" /><circle cx={x} cy="230" r={index === 1 ? 10 : 5} /><text x={x} y="280" textAnchor="middle" className="vx-svg-label">{details[index].name.toUpperCase()}</text></g>)}
          <g className="vx-flow-packet"><circle r="3"><animateMotion dur="5s" repeatCount="indefinite" path={mode === 'local' ? 'M220 230H380H545V306H220Z' : 'M220 230L320 176L550 180L760 118L817 248L545 230'} /></circle></g>
          <text x="32" y="433" className="vx-svg-micro">SIMPLIFIED CORE AI PATH</text><text x="868" y="433" textAnchor="end" className="vx-svg-micro">{mode === 'local' ? 'EXTERNAL AI REQUESTS: 0' : 'DEVICE BOUNDARY CROSSED'}</text>
        </svg>
      </div>
      <div className="vx-flow-details"><div className="vx-flow-steps" role="group" aria-label="Inspect each step">{details.map((detail, index) => <button key={detail.name} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>0{index + 1}</span>{detail.name}<ArrowUpRight size={16} aria-hidden="true" /></button>)}</div><div className="vx-flow-explanation" aria-live="polite"><span className="vx-eyebrow">{mode === 'local' ? details[selected].caption : 'A different boundary'}</span><p>{mode === 'local' ? details[selected].text : 'In a typical cloud AI workflow, your input travels to an external service for processing. Its storage and retention depend on that provider. This diagram compares the core processing path, not every connection an app can make.'}</p></div></div>
    </div>
    <div className="vx-boundary-foot"><p>Local-first has specifics. Optional iCloud, model downloads, and connected features are documented app by app.</p><Link to="/philosophy#boundary-check" className="vx-link">Inspect the boundary<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
  </section>;
}
