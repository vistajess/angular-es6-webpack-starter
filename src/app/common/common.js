'use strict';
import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Sidebar from './sidebar';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Sidebar.name,
  Hero.name,
  User.name
]);

export default commonModule;
