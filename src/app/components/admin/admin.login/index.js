'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AdminLogin from './admin.login.component';
import AuthService from 'app/services/auth.service';

let adminLoginModule = angular.module('admin.login', [])
.service('AuthService', AuthService)
.component('adminLogin', AdminLogin);

export default adminLoginModule;
