const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      signal: controller.signal,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      clearTimeout(timeout);

      // Handle non-JSON responses gracefully
      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        const error = new Error(
          typeof data === 'object' ? JSON.stringify(data) : data || `HTTP ${response.status}`
        );
        error.status = response.status;
        error.data = data;
        throw error;
      }

      return data;
    } catch (error) {
      clearTimeout(timeout);
      if (error.name === 'AbortError') {
        const timeoutError = new Error('Request timed out. Please try again.');
        timeoutError.status = 408;
        throw timeoutError;
      }
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
