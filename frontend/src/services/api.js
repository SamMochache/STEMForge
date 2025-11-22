const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw { status: response.status, data };
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Programs
  async getPrograms() {
    return this.request('/programs/');
  }

  async getProgram(slug) {
    return this.request(`/programs/${slug}/`);
  }

  // Registrations
  async createRegistration(data) {
    return this.request('/registrations/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Bookings (School Visits)
  async createBooking(data) {
    return this.request('/bookings/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Blog
  async getBlogPosts() {
    return this.request('/blog/');
  }

  async getBlogPost(slug) {
    return this.request(`/blog/${slug}/`);
  }

  // Gallery
  async getGallery() {
    return this.request('/gallery/');
  }

  // Instructors
  async getInstructors() {
    return this.request('/instructors/');
  }
}

export const api = new ApiService();
export default api;