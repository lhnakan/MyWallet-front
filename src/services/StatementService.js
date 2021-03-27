import api from '../config/api';

class StatementService {
  async getAll(token) {
    try {
      const { data } = await api.get('/users/signup', { 
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new StatementService();
