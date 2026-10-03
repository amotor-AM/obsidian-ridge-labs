import React from 'react';

/** The slash belongs between the two words, as part of the wordmark. */
export default function Brand() {
  return <span className="site-wordmark__name">Obsidian<span aria-hidden="true"> / </span><span className="sr-only"> </span>Ridge Labs</span>;
}
