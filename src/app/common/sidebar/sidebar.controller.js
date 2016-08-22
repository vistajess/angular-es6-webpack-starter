'use strict';
class SidebarController {
  constructor(AuthService, $cookies) {
    this.name = 'sidebar';
    this.AuthService = AuthService;
    this.cookieUser = $cookies.getObject('authenticated_user') || null;
    this.viewName = this.cookieUser.name;
  }

  $onInit() {

  }



}

SidebarController.$inject = ['AuthService', '$cookies'];

export default SidebarController;
