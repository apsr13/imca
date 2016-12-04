export default [
  { 
    name: 'home',
    route: ['', 'home'], 
    moduleId: 'home/home', 
    nav: true, 
    title: 'Home', 
    settings: { iconClass: 'fa-home' } 
  },
  { 
    route: 'tickets', 
    moduleId: 'tickets/tickets', 
    nav: true, 
    settings: { iconClass: 'fa-ticket' } 
  },
  { 
    name: 'thread',
    route: 'tickets/:id', 
    moduleId: 'tickets/thread' 
  },
  { 
    name: 'help',
    route: 'help', 
    moduleId: 'help/help' 
  }
];