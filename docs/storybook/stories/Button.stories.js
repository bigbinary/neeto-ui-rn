import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from '@neeto-ui-rn/ui';

storiesOf('Button', module)
  .add('Cool', () => (
    <Button text="Cool" bg="red"/>
  ))
  .add('Nice', () => (
    <Button text="Nice" backgroundColor="green"/>
  ));
