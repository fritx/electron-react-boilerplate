
// https://github.com/parro-it/debug-menu
// 开发模式下 开启chrome右键审查菜单 方便调试
if (__DEV__) require('debug-menu').install();

// https://github.com/atom/electron/issues/3609
// 禁用mac自带 双击放大功能
import { webFrame } from 'electron';
webFrame.setZoomFactor(1); // 确保归位
webFrame.setZoomLevelLimits(1, 1);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import * as configActions from './actions/config';
import './app.css';

const store = configureStore();

// 初始加载config 然后render
store.dispatch(configActions.loadConfig())
  .then(doRender)


function doRender() {
  render(
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  );

  if (process.env.NODE_ENV !== 'production') {
    // Use require because imports can't be conditional.
    // In production, you should ensure process.env.NODE_ENV
    // is envified so that Uglify can eliminate this
    // module and its dependencies as dead code.
    // require('./createDevToolsWindow')(store);
  }
}
