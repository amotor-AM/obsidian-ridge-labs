import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, ArrowRight, Check, Minus, Plus } from 'lucide-react';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import './styles/design-directions.css';

type Direction = 'unedited' | 'computer' | 'standard';

const directions: { id: Direction; title: string; premise: string }[] = [
  { id: 'unedited', title: 'The unedited version', premise: 'An intimate opening. One interaction makes the cost of withholding context tangible.' },
  { id: 'computer', title: 'The computer you own', premise: 'Real software at the center. The product carries the argument, with room to inspect it.' },
  { id: 'standard', title: 'The standard', premise: 'A studio with a position. A graphic, editorial opening leads into the work.' },
];

function Wordmark() {
  return <a className="study-wordmark" href="/" aria-label="Obsidian Ridge Labs home">OBSIDIAN<span>/</span>RIDGE<small>LABS</small></a>;
}

function StudioNav() {
  return <header className="study-nav">
    <Wordmark />
    <nav aria-label="Studio navigation"><a href="/download">The collection</a><a href="/philosophy">The standard</a><a href="/journal">Journal</a></nav>
    <a className="study-nav-action" href="/apps/echochamber">Echo Chamber<ArrowUpRight size={16} aria-hidden="true" /></a>
  </header>;
}

function LinkArrow({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="study-link" href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

function StudyEnd() {
  return <footer className="study-end"><Wordmark /><p>Move the intelligence.<br />Not the private life.</p><span>Independent software studio<br />Las Vegas, Nevada</span></footer>;
}

function NoteExample() {
  const [withheld, setWithheld] = useState(false);
  const fragment = (text: string) => withheld ? <span className="note-redaction" aria-label="withheld">{text}</span> : <span className="note-detail">{text}</span>;
  return <div className="note-example" data-withheld={withheld}>
    <div className="note-example-top"><span>An illustrative note</span><span className="note-state"><i />{withheld ? 'The version you edit' : 'The version you mean'}</span></div>
    <p className="note-content">Ask {fragment('Maya')} about the studio.<br />I want to {fragment('leave my job')}.<br />I’m not ready to {fragment('tell everyone')}.</p>
    <div className="note-example-bottom">
      <button aria-pressed={withheld} onClick={() => setWithheld(!withheld)}>{withheld ? <Plus size={17} aria-hidden="true" /> : <Minus size={17} aria-hidden="true" />}{withheld ? 'Put the context back' : 'Take out the private parts'}</button>
      <p aria-live="polite">{withheld ? 'Safe enough to share. Useful enough to help?' : 'The meaning is in the details.'}<span>This is a visual example. Nothing is submitted.</span></p>
    </div>
  </div>;
}

function Unedited() {
  return <div className="study-site study-site--unedited">
    <StudioNav />
    <section className="unedited-opening study-inset">
      <div className="unedited-kicker"><span>Apps that mind their own business.</span><span>Local by design.</span></div>
      <div className="unedited-intro">
        <h1>AI that knows you.<br /><span>Not one that<br />watches you.</span></h1>
        <div><p>You leave things out when you don’t trust where they’ll end up.</p><p>We build apps that can help with the unedited version.</p><LinkArrow href="/apps/echochamber">Echo Chamber is available now</LinkArrow></div>
      </div>
      <NoteExample />
      <div className="unedited-bottom"><span>On your side of the glass.</span><a href="#unedited-story">What did you leave out?<ArrowDown size={18} aria-hidden="true" /></a></div>
    </section>
    <section className="unedited-story study-inset" id="unedited-story">
      <span className="study-label">The Trade</span>
      <h2>You remove the name.<br />Then the part<br />that mattered.</h2>
      <div><p>A paragraph disappears. So does the reason you wrote the note. By the time it feels safe to upload, you’ve taken out what you needed help with.</p><p>The Trade asks you to choose between useful software and the details you won’t hand over.</p><p className="unedited-conclusion">Privacy is what makes it personal.</p><LinkArrow href="/philosophy">Read the standard</LinkArrow></div>
    </section>
    <section className="unedited-proof study-inset">
      <div className="unedited-proof-image"><img src="/images/echochamber/transcription-details-960.webp" alt="Echo Chamber displaying a recording and its readable transcript" width="960" height="1707" loading="lazy" /></div>
      <div className="unedited-proof-copy"><span className="study-label">Echo Chamber / On the App Store</span><h2>Keep what<br />was said.</h2><p>Echo Chamber turns a recording into a searchable transcript on your Apple device. Bookmark a moment while you record, then return to it after the conversation ends.</p><p>Transcription does not require uploading the recording. Optional encrypted iCloud sync has its own boundary.</p><LinkArrow href="/apps/echochamber#boundary">Read the boundary</LinkArrow><a className="study-small-link" href="/apps/echochamber">Explore Echo Chamber<ArrowRight size={16} aria-hidden="true" /></a></div>
    </section>
    <AppIndex />
    <StudyEnd />
  </div>;
}

const echoViews = [
  { label: 'Record', file: 'record-screen', heading: 'Start with the conversation.', copy: 'Record on your device. Bookmark a moment without interrupting the recording.', alt: 'Echo Chamber recording screen' },
  { label: 'Read', file: 'transcription-details', heading: 'Return to the words.', copy: 'A searchable transcript, made on your device. Switch between readable text and timed segments.', alt: 'Echo Chamber recording with readable transcript' },
  { label: 'Ask', file: 'ai-chat', heading: 'Work with what was said.', copy: 'Ask questions about a transcript. The transcript intelligence runs on supported Apple hardware.', alt: 'Echo Chamber questions and answers about a transcript' },
];

function Computer() {
  const [view, setView] = useState(1);
  return <div className="study-site study-site--computer">
    <StudioNav />
    <section className="computer-opening study-inset">
      <div className="computer-hero-copy"><span className="study-label">Intelligence belongs on your device.</span><h1>AI that knows you.<br /><span>Not one that<br />watches you.</span></h1><p>The intelligence doesn’t have to live at the other end of an upload. Echo Chamber runs transcription on the Apple device you already own.</p><LinkArrow href="/apps/echochamber">Explore Echo Chamber</LinkArrow><span className="computer-availability"><i />On the App Store for iPhone, iPad, and Mac</span></div>
      <div className="computer-object"><div className="computer-object-base" aria-hidden="true" /><img src={`/images/echochamber/${echoViews[view].file}-960.webp`} alt={echoViews[view].alt} width="960" height="1707" /><div className="computer-view-controls" role="group" aria-label="Choose an Echo Chamber screen">{echoViews.map((item, index) => <button key={item.label} aria-pressed={view === index} onClick={() => setView(index)}>{item.label}</button>)}</div></div>
      <div className="computer-object-description" aria-live="polite"><span>Echo Chamber</span><h2>{echoViews[view].heading}</h2><p>{echoViews[view].copy}</p></div>
    </section>
    <section className="computer-path study-inset"><div><span className="study-label">You bought the computer.</span><h2>Put the model<br />where the<br />microphone is.</h2></div><div className="computer-path-copy"><p>The Trade turns your device into the front desk for a computer somewhere else. Your recording leaves first; the transcript comes back later.</p><p>Echo Chamber gives the recording a shorter trip.</p><ol><li><span>01</span><strong>Your recording</strong></li><li><span>02</span><strong>On-device speech model</strong></li><li><span>03</span><strong>Your transcript</strong></li></ol><span className="computer-path-label"><Check size={14} aria-hidden="true" />All three on your Apple device.</span><p className="study-fine-print">Required model setup needs a connection. Optional encrypted iCloud sync is separate from the transcription path.</p></div></section>
    <section className="computer-test study-inset"><span className="study-label">Try it yourself</span><h2>Turn on airplane mode.</h2><p>After model setup, Echo Chamber can record, transcribe, make notes, and search with Wi-Fi and cellular switched off.</p><LinkArrow href="/apps/echochamber#boundary">Inspect the boundary</LinkArrow></section>
    <AppIndex screenshots />
    <StudyEnd />
  </div>;
}

function Standard() {
  const [refusal, setRefusal] = useState(0);
  const positions = [
    { name: 'The recording', text: 'A useful transcript should not create a second audience.', note: 'Echo Chamber transcribes on your Apple device. The recording does not need an external AI service.' },
    { name: 'The training log', text: 'A strength coach should show its work.', note: 'Mettle is in development. Its programming is built around a training record you can inspect.' },
    { name: 'The study notes', text: 'Memory belongs to you.', note: 'Memora is in development. On-device card drafts and spaced repetition give your study material somewhere to stay.' },
  ];
  return <div className="study-site study-site--standard">
    <StudioNav />
    <section className="standard-opening study-inset">
      <div className="standard-poster" aria-hidden="true"><span>SILENCE</span><span>THE CLOUD<span className="standard-slash">/</span></span></div>
      <div className="standard-opening-bottom"><h1>AI that knows you.<br />Not one that watches you.</h1><div><p>Your life is not raw material.<br />We refuse The Trade.</p><LinkArrow href="/philosophy">Read the standard</LinkArrow></div></div>
      <div className="standard-edition"><span>Obsidian Ridge Labs</span><span>Independent software for Apple.</span><a href="/apps/echochamber">Echo Chamber is on the App Store<ArrowUpRight size={14} aria-hidden="true" /></a></div>
    </section>
    <section className="standard-letter study-inset"><span className="study-label">What we’re here to change.</span><div><p className="standard-letter-lead">The most useful version of AI is the one you don’t have to edit your life for.</p><p>You should be able to keep the name in the recording. The context in the note. The detail that would make the answer useful.</p><p>The Trade makes disclosure the price of intelligence. We build the other way around: the model comes to your device.</p><LinkArrow href="/philosophy#boundary-check">Run the Boundary Check</LinkArrow></div></section>
    <section className="standard-positions study-inset"><div className="standard-position-tabs" role="group" aria-label="Explore the studio’s product positions">{positions.map((item, index) => <button key={item.name} onClick={() => setRefusal(index)} aria-pressed={refusal === index}><span>0{index + 1}</span>{item.name}<ArrowRight size={18} aria-hidden="true" /></button>)}</div><div aria-live="polite" className="standard-position"><h2>{positions[refusal].text}</h2><p>{positions[refusal].note}</p><LinkArrow href={`/apps/${['echochamber', 'mettle', 'memora'][refusal]}`}>Explore {['Echo Chamber', 'Mettle', 'Memora'][refusal]}</LinkArrow></div></section>
    <AppIndex />
    <StudyEnd />
  </div>;
}

function AppIndex({ screenshots = false }: { screenshots?: boolean }) {
  return <section className={`study-app-index study-inset ${screenshots ? 'study-app-index--visual' : ''}`} aria-labelledby="study-collection-title">
    <div className="study-app-index-heading"><h2 id="study-collection-title">The collection.</h2><a href="/download">All ten apps<ArrowUpRight size={16} aria-hidden="true" /></a></div>
    <div className="study-app-list">{[
      { name: 'Echo Chamber', id: 'echochamber', job: 'A transcript without an external AI service.', status: 'On the App Store', image: 'echochamber/transcription-details-960.webp', width: 960, height: 1707 },
      { name: 'Mettle', id: 'mettle', job: 'Strength programming that shows its work.', status: 'In development', image: 'mettle/plan-960.webp', width: 441, height: 960 },
      { name: 'Memora', id: 'memora', job: 'Flashcards made from what you’re studying.', status: 'In development', image: 'memora/study-960.webp', width: 441, height: 960 },
    ].map(app => <a key={app.id} href={`/apps/${app.id}`}>{screenshots && <div className={`study-product-screen study-product-screen--${app.id}`}><img src={`/images/${app.image}`} alt={`${app.name} current interface`} width={app.width} height={app.height} loading="lazy" /></div>}<div><h3>{app.name}</h3><p>{app.job}</p></div><span>{app.status}</span><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div>
  </section>;
}

function App() {
  const initial = location.hash.slice(1) as Direction;
  const [direction, setDirection] = useState<Direction>(directions.some(item => item.id === initial) ? initial : 'unedited');
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    const sync = () => { const next = location.hash.slice(1) as Direction; if (directions.some(item => item.id === next)) setDirection(next); };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  const select = (next: Direction) => {
    setDirection(next);
    history.replaceState(null, '', `#${next}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
    requestAnimationFrame(() => main.current?.focus({ preventScroll: true }));
  };
  const selected = directions.find(item => item.id === direction)!;
  return <>
    <a className="study-skip" href="#study-main">Skip to design study</a>
    <div className="direction-picker"><div className="direction-picker-title"><strong>Obsidian Ridge Labs</strong><span>Art direction studies</span></div><div className="direction-picker-options" role="group" aria-label="Choose a design direction">{directions.map((item, index) => <button key={item.id} aria-pressed={direction === item.id} onClick={() => select(item.id)}><span>0{index + 1}</span>{item.title}</button>)}</div></div>
    <main ref={main} id="study-main" tabIndex={-1} key={direction}>
      <div className="direction-note"><strong>{selected.title}</strong><p>{selected.premise}</p><span>Concept preview, not the published site</span></div>
      {direction === 'unedited' ? <Unedited /> : direction === 'computer' ? <Computer /> : <Standard />}
    </main>
  </>;
}

createRoot(document.getElementById('directions-root')!).render(<React.StrictMode><App /></React.StrictMode>);
