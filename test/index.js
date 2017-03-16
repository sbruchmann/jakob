import test from 'ava';
import {expect} from 'chai';

import Jakob from '../lib/index';
import defaultConfig from '../lib/default-config';

test('Use default config when no options are given', () => {
  expect(new Jakob().config).to.deep.equal(defaultConfig);
});
