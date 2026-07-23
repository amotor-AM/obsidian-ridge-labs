const securityHeaders = {
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

const withSecurityHeaders = (response) => {
  const secured = new Response(response.body, response);
  Object.entries(securityHeaders).forEach(([name, value]) => secured.headers.set(name, value));
  return secured;
};

const assetRequest = (request, pathname) => {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
};

const permanentRedirects = new Map([
  ['/apps/echo', '/apps/echochamber'],
  ['/apps/mind', '/apps/cove'],
  ['/apps/nexus', '/download'],
  ['/blog/notion-vs-mindpalace', '/journal/private-ai-journal-guide']
]);

const rewriteBlogPath = (pathname) => {
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return pathname.replace(/^\/blog/, '/journal');
  }
  return null;
};

export default {
  async fetch(request, env) {
    if (!env.ASSETS?.fetch) {
      return new Response('Static asset binding unavailable.', { status: 503 });
    }

    const requestUrl = new URL(request.url);
    const permanentTarget = permanentRedirects.get(requestUrl.pathname) || rewriteBlogPath(requestUrl.pathname);
    if (permanentTarget) {
      requestUrl.pathname = permanentTarget;
      return withSecurityHeaders(Response.redirect(requestUrl.toString(), 301));
    }
    if (requestUrl.pathname.length > 1 && requestUrl.pathname.endsWith('/')) {
      requestUrl.pathname = requestUrl.pathname.replace(/\/+$/, '');
      return withSecurityHeaders(Response.redirect(requestUrl.toString(), 301));
    }

    const direct = await env.ASSETS.fetch(request);
    if (direct.status !== 404 || !['GET', 'HEAD'].includes(request.method)) {
      return withSecurityHeaders(direct);
    }

    const url = requestUrl;
    const accept = request.headers.get('Accept') || '';
    const lastSegment = url.pathname.split('/').filter(Boolean).at(-1) || '';
    const isExtensionless = !lastSegment.includes('.');
    const acceptsHtml = !accept || accept.includes('text/html') || accept.includes('*/*');
    if (!acceptsHtml && !isExtensionless) return withSecurityHeaders(direct);

    const routeIndex = `${url.pathname.replace(/\/$/, '') || ''}/index.html`;
    const prerendered = await env.ASSETS.fetch(assetRequest(request, routeIndex));
    if (prerendered.status !== 404) {
      if (url.pathname !== '/404') return withSecurityHeaders(prerendered);
      return withSecurityHeaders(new Response(prerendered.body, { status: 404, headers: prerendered.headers }));
    }

    const notFound = await env.ASSETS.fetch(assetRequest(request, '/404/index.html'));
    const response = new Response(notFound.body, { status: 404, headers: notFound.headers });
    return withSecurityHeaders(response);
  }
};
