import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { collection, collectionJobs, isReleased } from '../data/collection';
import { getProductReleaseLabel } from '../data/products';
import '../styles/collection-directory.css';

export default function CollectionDirectory() {
  return <ul className="collection-directory">
    {collection.map(app => {
      const Icon = app.icon;
      return <li key={app.id}>
        <Link to={`/apps/${app.id}`} className="collection-directory__link">
          <span className="collection-directory__icon" style={{ color: app.accent }}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span>
          <span className="collection-directory__copy"><strong>{app.name}</strong><span>{collectionJobs[app.id] || app.description}</span><small className={isReleased(app) ? 'is-available' : undefined}>{getProductReleaseLabel(app)}</small></span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </li>;
    })}
  </ul>;
}
