'use strict';
import template from './sidebar.html';
import controller from './sidebar.controller';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default navbarComponent;
