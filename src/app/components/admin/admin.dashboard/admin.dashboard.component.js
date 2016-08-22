'use strict';
import template from './admin.dashboard.html';
import controller from './admin.dashboard.controller';

let dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default dashboardComponent;
