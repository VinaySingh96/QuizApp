export const USER_PREFERENCE = 'USER_PREFERENCE';

export const defaultPreference = {
  language: 'en',
  theme: 'dark',
  fontSize: 'large',
  dateFormat: 'DD-MM-YYYY',
  notifications: {
    enabled: true,
    quietHours: { start: '22:00', end: '07:00' },
  },
  accessibility: {
    highContrast: false,
    textToSpeech: true,
  },
  privacy: {
    analyticsOptIn: true,
    dataSharing: false,
  },
  content: {
    preferredTopics: ['algorithms', 'data structures'],
    defaultView: 'list',
  },
};
