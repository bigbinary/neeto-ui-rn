import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('Cool', () => (
    <Button title="Cool"/>
  ))
  .add('Nice', () => (
    <Button title="Nice"/>
  ));
