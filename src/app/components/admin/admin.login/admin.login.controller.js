'use strict';
class AdminLoginController {
  /*@ngInject*/
  constructor(AuthService,$state) {
    this.name = 'admin.login';
    this.$state = $state;
  }

  login() {
    this.$state.go('dashboard.home');
  }

}

AdminLoginController.$inject = ['AuthService','$state'];
export default AdminLoginController;
