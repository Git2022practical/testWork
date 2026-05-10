
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://git2022practical.github.io/testWork/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/testWork"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 679, hash: '92086da0c8eab60b0e5a6fee0264f152dad691d65ce9b6cb6974c4d8d00ab533', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'a670e69ba338dbfde0e5964accb0bd5c5af6ebfb53c30af4c48fc59c9cde66ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9253, hash: 'dabc1eccf26b775595e5a20740ba1d0b3a1425d70b4f94827276a857c74bdb05', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CO5AJWM2.css': {size: 51, hash: 'cElj45uho5Y', text: () => import('./assets-chunks/styles-CO5AJWM2_css.mjs').then(m => m.default)}
  },
};
