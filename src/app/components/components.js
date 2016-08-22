'use strict';
import angular from 'angular';
import AdminLogin from './admin/admin.login';
import AdminDashboard from './admin/admin.dashboard';

let componentModule = angular.module('app.components', [
  AdminLogin.name,
  AdminDashboard.name
]);

export default componentModule;
