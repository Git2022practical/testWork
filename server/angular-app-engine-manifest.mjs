
export default {
  basePath: 'https://Git2022practical.github.io/testWork',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
