import api from '../config/api';

class LoginService {
  async signUp(userData) {
    try {
      const { data } = await api.post('/users/signup', userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
    
  async signIn(userData) {
    try {
      const { data } = await api.post('/users/sign-in', userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  } 
}

export default new LoginService();
