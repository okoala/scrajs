'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg',
    'egg-bin',
    'eslint',
    'eslint-config-egg'
  ],
  exclude: [
    'test/fixtures',
  ],
  registry: 'https://r.cnpmjs.org',
}
