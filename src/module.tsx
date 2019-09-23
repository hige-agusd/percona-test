import React, { PureComponent } from 'react';
import { PanelProps, PanelPlugin } from '@grafana/ui';
import { Giphy } from './components/giphy';

export class MyPanel extends PureComponent<PanelProps> {
  render() {
    return <Giphy />;
  }
}

export const plugin = new PanelPlugin(MyPanel);
