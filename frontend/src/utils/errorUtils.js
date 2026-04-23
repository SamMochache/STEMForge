/**
 * Parses API errors into a human-readable string.
 * Handles DRF field-level errors, plain messages, and network errors.
 */
export const parseApiError = (err) => {
  if (err?.data && typeof err.data === 'object') {
    return Object.entries(err.data)
      .map(([key, val]) => {
        const msg = Array.isArray(val) ? val.join(', ') : String(val);
        // Show non-field errors without the "non_field_errors:" prefix
        if (key === 'non_field_errors') return msg;
        return `${key}: ${msg}`;
      })
      .join('\n');
  }
  return err?.message || 'Something went wrong. Please try again.';
};