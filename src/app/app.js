import 'bootstrap';
import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import CONFIG_CONSTANTS from 'app/constants/api.config.constants';
import Routes from './routes/routes';


angular.module('app', [
    Common.name,
    Components.name
  ])
  .constant('CONFIG_CONSTANTS',CONFIG_CONSTANTS)
  .config(Routes)
  .component('app', AppComponent);
