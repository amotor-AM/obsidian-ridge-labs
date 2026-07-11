import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export interface SiteRouteComponents {
  Home: React.ElementType;
  ProductDetail: React.ElementType;
  EchoDetail: React.ElementType;
  DownloadPage: React.ElementType;
  PhilosophyPage: React.ElementType;
  BlogList: React.ElementType;
  BlogPost: React.ElementType;
  TermsOfService: React.ElementType;
  PrivacyPolicy: React.ElementType;
  HelpHome: React.ElementType;
  HelpArticle: React.ElementType;
  NotFound: React.ElementType;
}

/** One route map shared by lazy browser modules and eager prerender modules. */
const SiteRoutes: React.FC<{ components: SiteRouteComponents }> = ({ components }) => {
  const {
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
  } = components;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/apps/echo" element={<Navigate to="/apps/echochamber" replace />} />
      <Route path="/apps/mind" element={<Navigate to="/apps/cove" replace />} />
      <Route path="/apps/nexus" element={<Navigate to="/download" replace />} />
      <Route path="/apps/echochamber" element={<EchoDetail />} />
      <Route path="/apps/:id" element={<ProductDetail />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/help" element={<HelpHome />} />
      <Route path="/help/:appId" element={<HelpArticle />} />
      <Route path="/help/:appId/:articleId" element={<HelpArticle />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/notion-vs-mindpalace" element={<Navigate to="/blog/private-ai-journal-guide" replace />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
