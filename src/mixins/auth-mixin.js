import { Router } from '@vaadin/router';

export const AuthMixin = (SuperClass) =>
  class extends SuperClass {
    constructor() {
      super();
      this.isAuth = false;
    }

    checkAuth() {
      const token = localStorage.getItem('auth-token');
      //Me aseguro que sea un booleano
      return !!token;
    }

    login(token) {
      localStorage.setItem('auth-token', token);
      this.isAuth = true;
      this.dispatchEvent(
        new CustomEvent('auth-changed', {
          detail: {
            logged: true,
          },
        })
      );
    }

    logout() {
      localStorage.removeItem('auth-token');
      this.isAuth = false;
      this.dispatchEvent(
        new CustomEvent('auth-changed', {
          detail: {
            logged: false,
          },
        })
      );
    }
  };
