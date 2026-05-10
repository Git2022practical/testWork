
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
    'index.csr.html': {size: 679, hash: '08adead45e6550fb08d0f308889a5075031bc594f7b2def92a8bfd8be0545627', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '693250aad7af920143fd24a27dd2e2feadc5b766e43a4259152290fa4314cbc5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9295, hash: '79c957aa4cd1b41f4bd975fe83dc514c346bb63e34ddab172b1e6f9045071d0e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CO5AJWM2.css': {size: 51, hash: 'cElj45uho5Y', text: () => import('./assets-chunks/styles-CO5AJWM2_css.mjs').then(m => m.default)}
  },
};
