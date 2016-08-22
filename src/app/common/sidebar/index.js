'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidebarComponent from './sidebar.component';

let navbarModule = angular.module('sidebar', [
  uiRouter
])

.component('sidebar', sidebarComponent);

export default navbarModule;
