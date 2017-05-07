const MODELS = Symbol('loadedModels');

export default (app) => {
  const crawlerRoot = app.config.crawler.root;

  Object.defineProperty(app, 'scrajs', {
    value:
  });

  app.loader.loadToApp(crawlerRoot, MODELS);

  for (const name of Object.keys(app[MODELS])) {
    const instance = app[MODELS][name];
    app.crawler[name] = instance;
  }
}
