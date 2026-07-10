import React, { lazy } from 'react';
import SiteFrame from './SiteFrame';
import SiteRoutes, { type SiteRouteComponents } from './SiteRoutes';

const clientRouteComponents: SiteRouteComponents = {
  Home: lazy(() => import('./components/Home')),
  ProductDetail: lazy(() => import('./components/ProductDetail')),
  EchoDetail: lazy(() => import('./components/EchoDetail')),
  DownloadPage: lazy(() => import('./components/DownloadPage')),
  PhilosophyPage: lazy(() => import('./components/PhilosophyPage')),
  BlogList: lazy(() => import('./components/BlogList')),
  BlogPost: lazy(() => import('./components/BlogPost')),
  TermsOfService: lazy(() => import('./components/TermsOfService')),
  PrivacyPolicy: lazy(() => import('./components/PrivacyPolicy')),
  HelpHome: lazy(() => import('./components/help/HelpHome')),
  HelpArticle: lazy(() => import('./components/help/HelpArticle')),
  NotFound: lazy(() => import('./components/NotFound')),
};

const App: React.FC = () => {
  return (
    <SiteFrame>
      <SiteRoutes components={clientRouteComponents} />
    </SiteFrame>
  );
};

export default App;
