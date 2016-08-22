'use strict';
import template from './hero.html';
import controller from './hero.controller';

let heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default heroComponent;
