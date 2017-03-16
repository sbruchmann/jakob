import test from 'ava';
import {expect} from 'chai';

import Jakob from '../lib/index';
import defaultConfig from '../lib/default-config';

test('Use default config when no options are given', () => {
  expect(new Jakob().config).to.deep.equal(defaultConfig);
});

test('Use given options as config', () => {
  const jakob = new Jakob({root: __dirname});
  expect(jakob.config.root).to.equal(__dirname);
});

test('Merge given options with default config', () => {
  const jakob = new Jakob({env: 'test'});
  expect(jakob.config.root).to.equal(process.cwd());
  expect(jakob.config.env).to.equal('test');
});
