'use strict';

import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './layouts/MainLayout';
import ResolutionsMain from './components/resolutions/ResolutionsMain';
import ResolutionsDetail from './components/resolutions/ResolutionsDetail';
import About from './components/about';

//routes
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
        content: (<ResolutionsMain />)
      }
    )
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
        content: (<About />)
      }
    )
  }
});

FlowRouter.route('/resolution/:id', {
  action(params) {
    mount(MainLayout, {
        content: (<ResolutionsDetail id={params.id}/>)
      }
    )
  }
});
