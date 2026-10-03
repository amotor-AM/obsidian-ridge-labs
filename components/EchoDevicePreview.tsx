import React from 'react';
import './echo-device-preview.css';

/** Original app captures, kept intact in a shared Mac and iPhone composition. */
export default function EchoDevicePreview({ phoneFile = 'transcription-details', phoneAlt, eager = false }: {
  phoneFile?: string;
  phoneAlt: string;
  eager?: boolean;
}) {
  return <div className="echo-device-pair">
    <div className="echo-device-pair__mac">
      <img src="/images/echochamber/mac-transcript-1210.webp" width="1210" height="720" alt="Echo Chamber on Mac, with the recording library, an example meeting transcript, and notes" loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
    <div className="echo-device-pair__phone">
      <img key={phoneFile} src={`/images/echochamber/${phoneFile}-960.webp`} srcSet={`/images/echochamber/${phoneFile}-480.webp 480w, /images/echochamber/${phoneFile}-960.webp 960w`} sizes="(max-width: 540px) 44vw, 270px" width="960" height="1707" alt={phoneAlt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  </div>;
}
