export const AuthMixin = (SuperClass) =>
  class extends SuperClass {
    constructor() {
      super();
      this.mockUser = {
        email: 'admin@admin.com',
        password: 'admin123',
      };
    }

    checkAuth() {
      const token = localStorage.getItem('auth-token');
      return !!token;
    }

    login(email, password) {
      if (email === this.mockUser.email && password === this.mockUser.password) {
        localStorage.setItem('auth-token', email);
        return { success: true, email };
      } else {
        return { success: false, error: '' };
      }
    }

    logout() {
      localStorage.removeItem('auth-token');
    }
  };
