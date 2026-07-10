import React from 'react';
import SiteFrame from './SiteFrame';
import SiteRoutes, { type SiteRouteComponents } from './SiteRoutes';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import EchoDetail from './components/EchoDetail';
import DownloadPage from './components/DownloadPage';
import PhilosophyPage from './components/PhilosophyPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import HelpHome from './components/help/HelpHome';
import HelpArticle from './components/help/HelpArticle';
import NotFound from './components/NotFound';

const serverRouteComponents: SiteRouteComponents = {
  Home,
  ProductDetail,
  EchoDetail,
  DownloadPage,
  PhilosophyPage,
  BlogList,
  BlogPost,
  TermsOfService,
  PrivacyPolicy,
  HelpHome,
  HelpArticle,
  NotFound,
};

/** Eager route tree used exclusively by the static prerender build. */
const ServerApp: React.FC = () => (
  <SiteFrame>
    <SiteRoutes components={serverRouteComponents} />
  </SiteFrame>
);

export default ServerApp;
