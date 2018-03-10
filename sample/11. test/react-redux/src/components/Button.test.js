import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('Buttonコンポーネント', () => {
  const text = '追加';
  const wrapper = shallow(<Button>{text}</Button>);

  expect(wrapper.contains(text)).toEqual(true);
});