define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot('login/login');
    });
  }
});
define('backend/lorem',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateSentence = generateSentence;
  exports.generateTitle = generateTitle;
  var text = 'In tempus neque mollis, pharetra arcu et, varius lacus. Sed nunc elit, cursus eget convallis sit amet, congue eget ligula. Nullam nec finibus arcu. Suspendisse vitae lectus mollis nunc laoreet dignissim vitae ut ligula. Vestibulum ut sodales libero. Pellentesque accumsan enim nunc, a facilisis magna porttitor quis. Pellentesque faucibus, erat nec aliquet consequat, turpis orci sollicitudin ante, et ultricies libero eros a diam. Aliquam pharetra sapien non gravida aliquet. Aliquam sed ante accumsan, auctor arcu ut, pretium arcu. Nullam nulla diam, suscipit in mollis sed, auctor ut risus. Maecenas lacinia non mauris quis rhoncus. Nunc purus sem, fringilla vitae pulvinar ac, egestas nec massa. Pellentesque imperdiet vitae ex nec eleifend. Vivamus dictum congue ex nec varius. Praesent ut augue sem. Vivamus commodo, risus sit amet tincidunt dignissim, nunc lectus feugiat odio, quis congue turpis ipsum sed sapien. Cras id dui dignissim, faucibus quam facilisis, congue ligula. Nunc sollicitudin justo a odio molestie, quis posuere magna tempor. Aliquam sodales nisi ex, in malesuada dolor posuere a. Cras iaculis pretium ipsum, mollis maximus urna. Proin fermentum lectus maximus efficitur pulvinar. Maecenas ac consequat velit, eget dapibus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis tortor a enim lobortis posuere quis non nisi. Morbi accumsan mauris et lectus fringilla rutrum sed in ante. Nulla velit purus, tristique eleifend lacinia quis, consectetur non justo. Duis vulputate efficitur facilisis. Cras a auctor libero. Proin pellentesque dolor in pretium tempus. In auctor ut lacus in viverra. Aenean pulvinar consequat lobortis. Phasellus luctus odio dui, vel tristique ipsum luctus id. Ut tincidunt diam quis quam tincidunt consequat sed sit amet elit. Nulla facilisi. Aenean elementum malesuada libero ac ultrices. Vivamus fermentum quis ex vel ultrices. Nullam urna dolor, pretium vel massa et, vestibulum lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius pretium leo. Nulla in euismod nibh. Curabitur tempus varius mauris, vitae consequat urna mollis sed. Vivamus efficitur justo id nisl sodales, non vehicula lectus pretium. Donec vel mi lorem. Integer dolor tortor, finibus eget semper nec, scelerisque et lacus. Integer id imperdiet ante. Integer placerat enim luctus luctus efficitur. Quisque eros enim, cursus id volutpat ac, finibus vel arcu. Donec a nibh nibh. Cras ligula enim, pretium nec sapien non, tempor feugiat urna. In ultricies diam ac eleifend feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec in velit sit amet est feugiat suscipit in sollicitudin odio. Suspendisse aliquam est vel neque dignissim consequat. Maecenas a diam id felis ultricies euismod. Nullam lacus urna, egestas ut orci volutpat, imperdiet commodo ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eleifend mattis diam, ac consectetur est cursus sit amet. Nam euismod risus vitae libero aliquet, viverra pellentesque sem pulvinar. Praesent tincidunt et enim et volutpat. Vestibulum vel lorem vitae purus facilisis ultrices. Nam dictum sodales justo, efficitur accumsan tortor posuere sit amet. Suspendisse imperdiet id lectus id suscipit. Duis ornare commodo bibendum. Fusce justo ante, scelerisque quis ex vel, auctor lacinia mauris. Maecenas elementum id dolor sit amet consequat. Phasellus sed nibh bibendum enim accumsan volutpat. Curabitur rhoncus euismod nibh, sit amet vestibulum arcu iaculis et. Ut eleifend ligula non lectus consequat, ut aliquam nunc accumsan. Curabitur eget justo ut ipsum maximus egestas. Praesent tempus, sapien vel lacinia euismod, odio enim blandit sem, eget congue mi enim ornare erat. Proin ornare, sem non sagittis mattis, nisi lorem porttitor erat, id euismod arcu diam ut augue. Ut tincidunt hendrerit nisl, sit amet tempor neque rutrum vitae. Sed dictum ante ac sem volutpat auctor. Fusce at fringilla neque. Cras vel nulla non arcu porttitor finibus. Aenean placerat condimentum enim luctus auctor. Pellentesque sit amet elit consequat, vulputate eros nec, ultrices mauris. Sed blandit sed diam id interdum. Proin vitae lectus non urna interdum imperdiet. Donec et velit ut lacus congue gravida. Aliquam efficitur a augue a pulvinar. Pellentesque sollicitudin nunc id mauris elementum fermentum. Praesent pellentesque mauris lorem, sit amet cursus nunc tristique ac. In pulvinar ullamcorper lacus, ac venenatis felis ultricies vitae. Etiam dolor nisi, fringilla non libero et, mollis blandit est. Fusce ultrices rhoncus elementum. Quisque et tortor nec sapien sodales ultricies. Phasellus commodo est massa, nec posuere lectus tristique vel. Etiam sagittis lacus eu sodales semper. In porta sit amet dolor et dignissim. In convallis nunc vel feugiat tincidunt. Nunc hendrerit pretium magna et mattis. Mauris et gravida justo. Mauris eleifend metus non odio eleifend, id iaculis dui consequat. Ut aliquam luctus vulputate. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut sapien gravida, consequat lectus vitae, aliquam felis. Pellentesque eget placerat ligula. In hac habitasse platea dictumst. In nec nulla feugiat, tincidunt tellus a, congue nibh. Morbi cursus condimentum arcu, sed faucibus metus ultrices quis. Aenean nec maximus justo. Nullam non justo velit. Nunc vestibulum pharetra neque eget sagittis. Phasellus volutpat semper massa, a accumsan dui bibendum id. Sed in egestas magna, nec blandit libero. Suspendisse ut lectus rutrum, imperdiet nisl in, imperdiet nisl. Pellentesque non bibendum lacus, sit amet sollicitudin ligula. Cras egestas tincidunt arcu, at porta justo ultricies sed. Suspendisse quam nisl, volutpat sed quam in, ornare mattis augue. Suspendisse eget ex mollis, hendrerit mauris sed, molestie leo. Pellentesque efficitur aliquam scelerisque. Vivamus at eros at metus semper suscipit. In neque enim, imperdiet id mattis sed, viverra non purus. Sed accumsan sodales ex, hendrerit scelerisque augue. In et eleifend sapien, vitae aliquam felis. Pellentesque faucibus sed tortor nec ullamcorper. Nulla tempus diam et gravida imperdiet. Ut volutpat dignissim porta. Etiam a finibus sem. Nulla facilisi. Nulla ac suscipit orci. Cras sit amet magna odio. Curabitur vel sapien dapibus, feugiat lacus vel, pellentesque justo. Donec vitae consectetur velit. Pellentesque ut risus a erat scelerisque mattis. Sed pellentesque lorem varius dictum pulvinar. Suspendisse vestibulum nec quam et sagittis. Nunc suscipit molestie.';

  var sentences = text.split('. ');

  var count = sentences.length;

  function generateSentence() {
    return sentences[Math.floor(Math.random() * count)] + '.';
  }

  function generateTitle() {
    return sentences[Math.floor(Math.random() * count)].trim().split(' ').slice(0, 3).join(' ').slice(0, -1);
  }
});
define('backend/server',['exports', './lorem'], function (exports, _lorem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Server = exports.User = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var latency = 0;

  function wait() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : latency;

    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function _clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  var User = exports.User = function () {
    function User(attrs) {
      _classCallCheck(this, User);

      if (attrs) {
        Object.assign(this, attrs);
      }
    }

    User.prototype.clone = function clone() {
      return new User(_clone(this));
    };

    _createClass(User, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }, {
      key: 'ticketCount',
      get: function get() {
        var _this = this;

        return ticketData.filter(function (t) {
          return t.fromId === _this.id;
        }).length;
      }
    }, {
      key: 'postCount',
      get: function get() {
        var _this2 = this;

        return ticketData.reduce(function (a, b) {
          return a.concat(b.posts);
        }, []).filter(function (p) {
          return p.fromId === _this2.id;
        }).length;
      }
    }]);

    return User;
  }();

  var userData = [new User({
    id: 1,
    username: 'nickvargo',
    email: 'nick@eecs.edu',
    firstName: 'Nick',
    lastName: 'Vargo',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: true
  }), new User({
    id: 2,
    username: 'bryanrsmith',
    email: 'bryan@eecs.edu',
    firstName: 'Bryan',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/2.jpg',
    avatarUrl: '/img/users/avatar/2.jpg',
    isActive: true
  }), new User({
    id: 3,
    username: 'tkane',
    email: 'kane@eecs.edu',
    firstName: 'Thomas',
    lastName: 'Kane',
    iconUrl: '/img/users/icon/3.jpg',
    avatarUrl: '/img/users/avatar/3.jpg',
    isActive: true
  }), new User({
    id: 4,
    username: 'nsmith',
    email: 'nsmith@eecs.edu',
    firstName: 'Nicole',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/4.jpg',
    avatarUrl: '/img/users/avatar/4.jpg',
    isActive: true
  }), new User({
    id: 5,
    username: 'asrivastava',
    email: 'srivastava@eecs.edu',
    firstName: 'Apoorva',
    lastName: 'Srivastava',
    iconUrl: '/img/users/icon/5.jpg',
    avatarUrl: '/img/users/avatar/5.jpg',
    isActive: true
  }), new User({
    id: 6,
    username: 'asome',
    email: 'asome@eecs.edu',
    firstName: 'Arnaud',
    lastName: 'Some',
    iconUrl: '/img/users/icon/6.jpg',
    avatarUrl: '/img/users/avatar/6.jpg',
    isActive: true
  }), new User({
    id: 7,
    username: 'mattdavis',
    email: 'matthew@eecs.edu',
    firstName: 'Matthew',
    lastName: 'Davis',
    iconUrl: '/img/users/icon/7.jpg',
    avatarUrl: '/img/users/avatar/7.jpg',
    isActive: true
  }), new User({
    id: 8,
    username: 'jimmy',
    email: 'jimmy@eecs.edu',
    firstName: 'Jimmy',
    lastName: 'Walters',
    iconUrl: '/img/users/icon/8.jpg',
    avatarUrl: '/img/users/avatar/8.jpg',
    isActive: true
  })];

  function randomDateInLastThirtyDays() {
    return new Date(new Date().getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  }

  function addRandomNumberOfDaysToDate(start, maxDays) {
    return new Date(Math.min(new Date(start.getTime() + Math.random() * Math.floor(Math.random() * maxDays) * 24 * 60 * 60 * 1000), new Date()));
  }

  var ticketData = [{
    id: 1,
    title: null,
    createdAt: new Date(),
    fromId: 1,
    status: 'Open',
    priority: 'Normal',
    type: 'Problem',
    participants: [],
    posts: [{
      createdAt: null,
      fromId: null,
      content: null
    }]
  }];

  for (var i = 0; i < 100; i++) {
    ticketData[i] = _clone(ticketData[0]);
    ticketData[i].id = i + 1;
    ticketData[i].title = (0, _lorem.generateTitle)();
    ticketData[i].participants[0] = _clone(userData[Math.floor(Math.random() * 8)]);
    ticketData[i].fromId = ticketData[i].participants[0].id;
    ticketData[i].createdAt = randomDateInLastThirtyDays();
    ticketData[i].posts[0].createdAt = addRandomNumberOfDaysToDate(ticketData[i].createdAt, 30);
    ticketData[i].posts[0].fromId = ticketData[i].participants[0].id;
    ticketData[i].posts[0].content = (0, _lorem.generateSentence)();
  }

  ticketData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var activityData = [{
    id: 1,
    createdAt: new Date(),
    content: (0, _lorem.generateSentence)(),
    type: 'ticket',
    associatedId: 1
  }];

  var _loop = function _loop(_i) {
    activityData[_i] = _clone(activityData[0]);
    activityData[_i].id = _i + 1;
    activityData[_i].createdAt = randomDateInLastThirtyDays();
    activityData[_i].associatedId = _i + 1;
    activityData[_i].createdBy = _clone(userData[Math.floor(Math.random() * 8)]);

    var ticket = ticketData.find(function (t) {
      return t.id === activityData[_i].associatedId;
    });
    activityData[_i].title = activityData[_i].createdBy.firstName + ' ' + activityData[_i].createdBy.lastName + ' <strong>posted</strong> a message to the ticket "' + ticket.title + '"';
  };

  for (var _i = 0; _i < 100; _i++) {
    _loop(_i);
  }

  activityData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var Server = exports.Server = function () {
    function Server() {
      _classCallCheck(this, Server);
    }

    Server.prototype.login = function login(username, password) {
      return wait().then(function () {
        if (username === 'admin' && password === 'password123') {
          return userData[0].clone();
        }
      });
    };

    Server.prototype.createUser = function createUser() {
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
    };

    Server.prototype.saveUser = function saveUser(user) {
      return wait().then(function () {
        var clone = user.clone();

        if (clone.id == 0) {
          clone.id = userData.length + 1;
          userData.unshift(clone);
        } else {
          var existing = userData.find(function (c) {
            return c.id === clone.id;
          });
          var index = userData.indexOf(existing);
          userData.splice(index, 1, clone);
        }

        return clone.clone();
      });
    };

    Server.prototype.getUser = function getUser(userId) {
      return wait().then(function () {
        var existing = userData.find(function (c) {
          return c.id === userId;
        });
        return existing ? existing.clone() : null;
      });
    };

    Server.prototype.getUserSummaries = function getUserSummaries() {
      return wait().then(function () {
        return userData.map(function (x) {
          return x.clone();
        });
      });
    };

    Server.prototype.createTicket = function createTicket(title) {
      var currentUser = _clone(userData[0]);

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
    };

    Server.prototype.saveTicket = function saveTicket(ticket) {
      return wait().then(function () {
        if (ticketData.indexOf(ticket) === -1) {
          ticket.id = ticketData.length + 1;
          ticketData.unshift(ticket);
        }

        return ticket;
      });
    };

    Server.prototype.getTicketSummaries = function getTicketSummaries() {
      return wait().then(function () {
        return _clone(ticketData);
      });
    };

    Server.prototype.getTicketDetails = function getTicketDetails(ticketId) {
      return wait().then(function () {
        return ticketData.find(function (x) {
          return x.id === ticketId;
        });
      });
    };

    Server.prototype.getRecentActivity = function getRecentActivity() {
      return wait().then(function () {
        return _clone(activityData);
      });
    };

    Server.prototype.getNews = function getNews() {
      return wait().then(function () {
        return [{
          title: "New Features Launched",
          content: "'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words: 'Yes, we went to school in the sea, though you mayn't believe it—' 'I never said I didn't!' interrupted Alice. 'You did,' said the Mock Turtle.",
          createdAt: new Date(),
          tags: ["release", "features", "blog"]
        }, {
          title: "Satisfaction Guaranteed",
          content: "'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain. 'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.",
          createdAt: new Date(),
          tags: ["release", "launch", "blog"]
        }];
      });
    };

    return Server;
  }();
});
define('home/home',['exports', 'aurelia-framework', 'backend/server'], function (exports, _aureliaFramework, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_server.Server), _dec(_class = function () {
    function Home(server) {
      _classCallCheck(this, Home);

      this.server = server;
      this.activity = null;
      this.news = null;
    }

    Home.prototype.activate = function activate() {
      var _this = this;

      return Promise.all([this.server.getRecentActivity().then(function (activity) {
        return _this.activity = activity;
      }), this.server.getNews().then(function (news) {
        return _this.news = news;
      })]);
    };

    return Home;
  }()) || _class);
});
define('login/login',['exports', 'aurelia-dependency-injection', 'aurelia-framework', 'backend/server'], function (exports, _aureliaDependencyInjection, _aureliaFramework, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Login = exports.Login = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFramework.Aurelia, _server.Server), _dec(_class = function () {
    function Login(aurelia, server) {
      _classCallCheck(this, Login);

      this.aurelia = aurelia;
      this.server = server;
      this.username = '';
      this.password = '';
      this.message = '';
    }

    Login.prototype.login = function login() {
      var _this = this;

      this.server.login(this.username, this.password).then(function (result) {
        if (result) {
          _this.message = '';

          _this.aurelia.use.instance(_server.User, result);
          _this.aurelia.setRoot('shell/shell');
        } else {
          _this.message = 'Incorrect Username or Password!';
        }
      });
    };

    return Login;
  }()) || _class);
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./value-converters/activity-type-to-route', './value-converters/date']);
  }
});
define('shell/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    name: 'home',
    route: ['', 'home'],
    moduleId: 'home/home',
    nav: true,
    title: 'Home',
    settings: { iconClass: 'fa-home' }
  }, {
    route: 'tickets',
    moduleId: 'tickets/tickets',
    nav: true,
    settings: { iconClass: 'fa-ticket' }
  }, {
    name: 'thread',
    route: 'tickets/:id',
    moduleId: 'tickets/thread'
  }, {
    name: 'user',
    route: ['users', 'users/:id'],
    moduleId: 'users/users',
    href: '#users',
    nav: true,
    title: 'Users',
    settings: { iconClass: 'fa-group' }
  }, {
    name: 'settings',
    route: 'settings',
    moduleId: 'settings/index',
    href: '#settings',
    nav: true,
    settings: { iconClass: 'fa-cog' }
  }, {
    name: 'help',
    route: 'help',
    moduleId: 'help/help'
  }];
});
define('shell/shell',['exports', 'aurelia-framework', 'backend/server', './routes'], function (exports, _aureliaFramework, _server, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Shell = undefined;

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Shell = exports.Shell = (_dec = (0, _aureliaFramework.inject)(_server.User), _dec(_class = function () {
    function Shell(user) {
      _classCallCheck(this, Shell);

      this.user = user;
    }

    Shell.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes2.default);
    };

    return Shell;
  }()) || _class);
});
define('resources/value-converters/activity-type-to-route',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ActivityTypeToRouteValueConverter = exports.ActivityTypeToRouteValueConverter = function () {
    function ActivityTypeToRouteValueConverter() {
      _classCallCheck(this, ActivityTypeToRouteValueConverter);
    }

    ActivityTypeToRouteValueConverter.prototype.toView = function toView(value) {
      switch (value) {
        case 'ticket':
          return 'thread';
        default:
          throw new Error('Unknown ticket type: ' + value + '.');
      }
    };

    return ActivityTypeToRouteValueConverter;
  }();
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dddd, MMMM D, YYYY';

      return (0, _moment2.default)(value).format(format);
    };

    return DateValueConverter;
  }();
});
define('text!login/login.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"login\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 logo\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 well\">\n        <div class=\"alert alert-danger\" show.bind=\"message\">${message}</div> <!--Display the message property here, only if present.-->\n\n        <form role=\"form\" class=\"form-horizontal\" submit.trigger=\"login()\"><!--Invoke login on form submit.-->\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Username</label>\n            <div class=\"col-sm-10\">\n              <input value.bind=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\"><!--Bind the username.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input value.bind=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\"><!--Bind the password.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10 text-right\">\n              <!--Disable the button if there isn't both a username and password.-->\n              <button disabled.bind=\"!username || !password\" type=\"submit\" class=\"btn btn-success\">Log In</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!home/activity-list.html', ['module'], function(module) { module.exports = "<template bindable=\"activity\">\n  <ul>\n    <li repeat.for=\"a of activity\" class=\"activity\">\n      <!--Note: The activity type isn't the same as the route. What do we do?-->\n      <a route-href=\"route.bind: a.type | activityTypeToRoute; params.bind: { id: a.associatedId }\">\n        <div class=\"well\">\n          <div class=\"avatar\">\n            <img src=\"${a.createdBy.iconUrl}\">\n          </div>\n          <div class=\"body\">\n            <div class=\"title\" innerhtml.bind=\"a.title\"></div>\n            <div class=\"content\">${a.content}</div>\n            <div class=\"date\">${a.createdAt | date}</div> <!--TODO: Add nicer date format. -->\n          </div>\n        </div>\n      </a>\n    </li>\n  </ul>\n</template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./activity-list.html\"></require>\n  \n  <div>\n    <div class=\"header\">\n      <div class=\"header-left\">Activity</div>\n      <div class=\"header-right\">Benchmarks &amp; News</div>\n    </div>\n\n    <div class=\"sidebar\">\n      <activity-list activity.bind=\"activity\"></activity-list>\n    </div>\n\n    <div class=\"detail-container\">\n      <div class=\"row1x2\">\n        <!--TODO: Add Charts Here-->\n      </div>\n      <div class=\"row2x2\">\n        <!--TODO: Add News List Here-->\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!shell/header.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <ul class=\"nav navbar-nav tabs\">\n      <!--TODO: Add Tabs UI-->\n      <li class=\"dropdown add\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <i class=\"fa fa-plus\"></i>add\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a route-href=\"route: thread; params.bind: { id:'new' }\"><i class=\"icon-ticket\"></i> New Ticket</a>\n          </li>\n          <li>\n            <a route-href=\"route: user; params.bind: { id:'new' }\"><i class=\"icon-group\"></i> New User</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"avatar dropdown-toggle\" data-toggle=\"dropdown\">\n          <img src=\"${user.iconUrl}\" title.bind=\"user.username\">\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"presentation\">\n            <a route-href=\"route: settings\"><i class=\"fa fa-cog\"></i> Settings</a>\n          </li>\n          <li role=\"presentation\">\n            <a route-href=\"route: help\"><i class=\"fa fa-envelope\"></i> Help</a>\n          </li>\n          <li role=\"presentation\" class=\"divider\"></li>\n          <li role=\"presentation\">\n            <a href=\"#\" click.trigger=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</template>"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <compose view=\"./sidebar.html\"></compose>\n  <compose view=\"./header.html\"></compose>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"main-nav\">\n    <ul class=\"nav nav-list\">\n      <li repeat.for=\"nav of router.navigation\" class=\"${nav.isActive ? 'active' : ''}\"> <!--One li per item in router.navigation; apply the active class if items.isActive-->\n        <a href.bind=\"nav.href\"> <!--Bind the href to item.href-->\n          <i class=\"fa ${nav.settings.iconClass}\"></i> <!--Add the icon class based on settings.-->\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map