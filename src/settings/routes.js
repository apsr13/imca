let adminHome = {
  title: 'Admin Portal',
  iconClass: 'fa-home'
};

let channels = {
  title: 'Channels',
  iconClass: 'fa-external-link'
};

let settings = {
  title: 'Settings',
  iconClass: 'fa-cog'
};

export default [
  { route: '', moduleId: './overview/index', title: 'Overview', nav: true, settings: { category: adminHome } },

  { route: 'web-portal', moduleId: './webportal/index', title: 'Web Portal', nav: true, settings: { category: channels } },
  { route: 'feedback-tab', moduleId: './feedbacktab/index', title: 'Feedback Tab', nav: true, settings: { category: channels } },
  { route: 'account', moduleId: './account/index', title: 'Account', nav: true, settings: { category: settings } },
  { route: 'security', moduleId: './security/index', title: 'Security', nav: true, settings: { category: settings } }
];