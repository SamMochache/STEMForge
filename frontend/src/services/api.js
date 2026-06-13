import { blogPosts, getBlogPostBySlug } from '../data/blogPosts';
import { getProgramBySlug, programs } from '../data/programs';

const APPLICATION_EMAIL = 'sammochache03@gmail.com';
const APPLICATION_EMAIL_ENDPOINT = `https://formsubmit.co/ajax/${APPLICATION_EMAIL}`;

const readCollection = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const writeCollection = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The UI should still succeed if storage is unavailable.
  }
};

const createLocalRecord = (key, data) => {
  const collection = readCollection(key);
  const record = {
    id: Date.now(),
    ...data,
    created_at: new Date().toISOString(),
  };
  writeCollection(key, [record, ...collection]);
  return record;
};

const updateLocalRecord = (key, id, data) => {
  const collection = readCollection(key);
  const updated = collection.map((item) => (item.id === id ? { ...item, ...data } : item));
  writeCollection(key, updated);
  return updated.find((item) => item.id === id);
};

const formatBoolean = (value) => (value ? 'Yes' : 'No');

const sendApplicationEmail = async (data) => {
  const selectedProgram = programs.find((program) => program.id === data.program);
  const programName = selectedProgram?.title || `Program ID ${data.program}`;
  const programPrice = selectedProgram
    ? selectedProgram.price === 0
      ? 'Free'
      : `KSh ${selectedProgram.price.toLocaleString()}`
    : 'Not available';

  const response = await fetch(APPLICATION_EMAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _subject: `New STEMForge application - ${programName}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.parent_email,
      name: data.parent_name,
      email: data.parent_email,
      phone: data.parent_phone,
      child_name: data.child_name,
      child_age: data.child_age,
      program: programName,
      listed_price: programPrice,
      preferred_call_date: data.call_date || 'No preference',
      preferred_call_time: data.call_time || 'No preference',
      preferred_schedule: data.preferred_schedule || 'No preference',
      bargaining_requested: formatBoolean(data.wants_bargain),
      promotion_code: data.promo_code || 'None',
      budget_or_offer_note: data.budget_note || 'None',
      additional_notes: data.notes || 'None',
    }),
  });

  if (!response.ok) {
    throw new Error('We could not email your application. Please try again.');
  }

  return response.json();
};

class ApiService {
  async getPrograms() {
    return programs.filter((program) => program.is_published);
  }

  async getProgram(slug) {
    const program = getProgramBySlug(slug);
    if (!program || !program.is_published) {
      throw new Error('Program not found');
    }
    return program;
  }

  async createRegistration(data) {
    const record = createLocalRecord('stemforge_registrations', {
      ...data,
      email_status: 'pending',
    });

    try {
      await sendApplicationEmail(data);
    } catch (error) {
      updateLocalRecord('stemforge_registrations', record.id, {
        email_status: 'failed',
        email_error: error.message,
      });
      throw error;
    }

    return updateLocalRecord('stemforge_registrations', record.id, {
      email_status: 'sent',
    });
  }

  async createBooking(data) {
    return createLocalRecord('stemforge_bookings', data);
  }

  async getBlogPosts() {
    return blogPosts.filter((post) => post.is_published);
  }

  async getBlogPost(slug) {
    const post = getBlogPostBySlug(slug);
    if (!post || !post.is_published) {
      throw new Error('Post not found');
    }
    return post;
  }

  async getGallery() {
    return [];
  }

  async getInstructors() {
    return [];
  }
}

export const api = new ApiService();
export default api;
