import {generateSentence, generateTitle} from './lorem';

const latency = 0;

function wait(ms = latency) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export class User {
  constructor(attrs) {
    if (attrs) {
      Object.assign(this, attrs);
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  get ticketCount() {
    return ticketData.filter(t => t.fromId === this.id).length;
  }
  
  get postCount() {
    return ticketData.reduce( (a,b) => a.concat(b.posts), [] ).filter( p => p.fromId === this.id ).length;
  } 

  clone() {
    return new User(clone(this));
  }
}

let userData = [
  new User({
    id: 1,
    username: 'nickvargo',
    email: 'nick@eecs.edu',
    firstName: 'Nick',
    lastName: 'Vargo',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: true
  }),
  new User({
    id: 2,
    username: 'bryanrsmith',
    email: 'bryan@eecs.edu',
    firstName: 'Bryan',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/2.jpg',
    avatarUrl: '/img/users/avatar/2.jpg',
    isActive: true
  }),
  new User({
    id: 3,
    username: 'tkane',
    email: 'kane@eecs.edu',
    firstName: 'Thomas',
    lastName: 'Kane',
    iconUrl: '/img/users/icon/3.jpg',
    avatarUrl: '/img/users/avatar/3.jpg',
    isActive: true
  }),
  new User({
    id: 4,
    username: 'nsmith',
    email: 'nsmith@eecs.edu',
    firstName: 'Nicole',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/4.jpg',
    avatarUrl: '/img/users/avatar/4.jpg',
    isActive: true
  }),
  new User({
    id: 5,
    username: 'asrivastava',
    email: 'srivastava@eecs.edu',
    firstName: 'Apoorva',
    lastName: 'Srivastava',
    iconUrl: '/img/users/icon/5.jpg',
    avatarUrl: '/img/users/avatar/5.jpg',
    isActive: true
  }),
  new User({
    id: 6,
    username: 'asome',
    email: 'asome@eecs.edu',
    firstName: 'Arnaud',
    lastName: 'Some',
    iconUrl: '/img/users/icon/6.jpg',
    avatarUrl: '/img/users/avatar/6.jpg',
    isActive: true
  }),
  new User({
    id: 7,
    username: 'mattdavis',
    email: 'matthew@eecs.edu',
    firstName: 'Matthew',
    lastName: 'Davis',
    iconUrl: '/img/users/icon/7.jpg',
    avatarUrl: '/img/users/avatar/7.jpg',
    isActive: true
  }),
  new User({
    id: 8,
    username: 'jimmy',
    email: 'jimmy@eecs.edu',
    firstName: 'Jimmy',
    lastName: 'Walters',
    iconUrl: '/img/users/icon/8.jpg',
    avatarUrl: '/img/users/avatar/8.jpg',
    isActive: true
  })
];

function randomDateInLastThirtyDays() { 
  return new Date(new Date().getTime() - (Math.random()*30*24*60*60*1000)); 
}

// adds a random number of days to a date, returns the new date or the current date, whichever is earlier (thus no future dates)
function addRandomNumberOfDaysToDate(start, maxDays) {
  return new Date(Math.min(new Date(start.getTime() + (Math.random()*Math.floor(Math.random() * maxDays)*24*60*60*1000)), new Date())); 
}

var ticketData = [
  {
    id: 1,
    title: null,
    createdAt: new Date(),
    fromId: 1,
    status: 'Open',
    priority: 'Normal',
    type: 'Problem',
    participants: [],
    posts: [
      {
        createdAt: null,
        fromId: null,
        content: null
      }
    ]
  }
];

for (let i = 0; i < 100; i++) {
  ticketData[i] = clone(ticketData[0]);
  ticketData[i].id = i + 1;
  ticketData[i].title = generateTitle();
  ticketData[i].participants[0] = clone(userData[Math.floor(Math.random() * 8)]);
  ticketData[i].fromId = ticketData[i].participants[0].id;
  ticketData[i].createdAt = randomDateInLastThirtyDays();
  ticketData[i].posts[0].createdAt = addRandomNumberOfDaysToDate(ticketData[i].createdAt,30);
  ticketData[i].posts[0].fromId = ticketData[i].participants[0].id;
  ticketData[i].posts[0].content = generateSentence();
}

ticketData.sort((a,b) => b.createdAt - a.createdAt);

let activityData = [
  {
    id: 1,
    createdAt: new Date(),
    content: generateSentence(),
    type: 'ticket',
    associatedId: 1
  }
];

for (let i = 0; i < 100; i++) {
  activityData[i] = clone(activityData[0]);
  activityData[i].id = i + 1;
  activityData[i].createdAt = randomDateInLastThirtyDays();
  activityData[i].associatedId = i + 1;
  activityData[i].createdBy = clone(userData[Math.floor(Math.random() * 8)]);
  
  let ticket = ticketData.find(t => t.id === activityData[i].associatedId);
  activityData[i].title = `${activityData[i].createdBy.firstName} ${activityData[i].createdBy.lastName} <strong>posted</strong> a message to the ticket "${ticket.title}"`
}

activityData.sort((a,b) => b.createdAt - a.createdAt);

export class Server {
  login(username, password) {
    return wait().then(() => {
      if (username === 'admin' && password === 'password123') {
        return userData[0].clone();
      }
      else if (username === 'associate' && password === 'password456') {
        return userData[0].clone();
      }
    });
  }

  createUser() {
    return new User({
    id: 0,
    username: 'NewUser',
    email: '',
    firstName: 'New',
    lastName: 'User',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: false
    });
  }
  
  saveUser(user) {
    return wait().then(() => {
      let clone = user.clone();

      if (clone.id == 0) {
        clone.id = userData.length + 1;
        userData.unshift(clone);
      } else {
        let existing = userData.find(c =>  c.id === clone.id);
        let index = userData.indexOf(existing);
        userData.splice(index, 1, clone);
      }

      return clone.clone();
    });
  }
  
  getUser(userId) {
    return wait().then(() => {
      let existing = userData.find(c => c.id === userId);
      return existing ? existing.clone() : null;
    });
  }
  
  getUserSummaries() {
    return wait().then(() => userData.map(x => x.clone()));
  }

  createTicket(title) {
    var currentUser = clone(userData[0]);

    return {
      id: 0,
      title: title,
      createdAt: new Date(),
      fromId: currentUser.id,
      status: 'Open',
      priority: 'Normal',
      type: 'Problem',
      participants: [currentUser],
      posts: []
    };
  }

  saveTicket(ticket) {
    return wait().then(() => {
      if (ticketData.indexOf(ticket) === -1) {
        ticket.id = ticketData.length + 1;
        ticketData.unshift(ticket);
      }

      return ticket;
    });
  }

  getTicketSummaries() {
    return wait().then(() => clone(ticketData));
  }

  getTicketDetails(ticketId) {
    return wait().then(() => ticketData.find(x => x.id === ticketId));
  }

  getRecentActivity() {
    return wait().then(() => clone(activityData));
  }

  getNews() {
    return wait().then(() => {
      return [
        {
          title: "Ticket 001 - Resolved",
          content: "Lorem ipsum dolor sit amet, vis quot iusto accusata in, tantas sanctus sit an. Ne pro suas alterum, justo alienum usu ex. Vide aeterno ei mei. At nam magna explicari, cu eam error viderer. Te atqui aeque referrentur per, vel simul commodo ei, splendide vulputate in eum.",
          createdAt: new Date(),
          tags: ["close", "reject", "reopen"]
        },
        {
          title: "Ticket 027 - Resolved",
          content: "Lorem ipsum dolor sit amet, vis quot iusto accusata in, tantas sanctus sit an. Ne pro suas alterum, justo alienum usu ex. Vide aeterno ei mei. At nam magna explicari, cu eam error viderer. Te atqui aeque referrentur per, vel simul commodo ei, splendide vulputate in eum.",
          createdAt: new Date(),
          tags: ["close", "reject", "reopen"]
        }
      ];
    });
  }
}
