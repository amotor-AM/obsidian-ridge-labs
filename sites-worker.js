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

export default {
  async fetch(request, env) {
    if (!env.ASSETS?.fetch) {
      return new Response('Static asset binding unavailable.', { status: 503 });
    }

    const direct = await env.ASSETS.fetch(request);
    if (direct.status !== 404 || !['GET', 'HEAD'].includes(request.method)) {
      return withSecurityHeaders(direct);
    }

    const url = new URL(request.url);
    const acceptsHtml = request.headers.get('Accept')?.includes('text/html');
    if (!acceptsHtml) return withSecurityHeaders(direct);

    const routeIndex = `${url.pathname.replace(/\/$/, '') || ''}/index.html`;
    const prerendered = await env.ASSETS.fetch(assetRequest(request, routeIndex));
    if (prerendered.status !== 404) return withSecurityHeaders(prerendered);

    const fallback = await env.ASSETS.fetch(assetRequest(request, '/index.html'));
    return withSecurityHeaders(fallback);
  }
};
