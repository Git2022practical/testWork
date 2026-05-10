
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Git2022practical.github.io/testWork/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/testWork"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 679, hash: 'ab6e7b10df8c35edc78c899ebef28f8f1d5cd7d22dd938afb97052e5852e1420', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'b15f1e2f07d219dd822908610fba384e7e4074f2f38b101ee38bad3652cf2d39', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9184, hash: '7b5dc268ec4bfea8a44d9801d726683f5f6a23ba57285ae13e1f5a725e1e5ab0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CO5AJWM2.css': {size: 51, hash: 'cElj45uho5Y', text: () => import('./assets-chunks/styles-CO5AJWM2_css.mjs').then(m => m.default)}
  },
};
