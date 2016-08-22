'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AdminDashboard from './admin.dashboard.component';

let adminDashboardModule = angular.module('admin.dashboard', [])
.component('adminDashboard', AdminDashboard);

export default adminDashboardModule;
