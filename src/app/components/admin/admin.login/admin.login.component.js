'use strict';
import template from './admin.login.html';
import controller from './admin.login.controller';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default loginComponent;
