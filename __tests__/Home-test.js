import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Dummy from '../app/screens/dummy';

test('Home snapShot', () => {
  const snap = renderer.create(<Dummy />).toJSON();
  expect(snap).toMatchSnapshot();
});
