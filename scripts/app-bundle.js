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
    aurelia.use.standardConfiguration().plugin('aurelia-dialog').feature('resources');

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
          title: "Ticket 001 - Resolved",
          content: "Lorem ipsum dolor sit amet, vis quot iusto accusata in, tantas sanctus sit an. Ne pro suas alterum, justo alienum usu ex. Vide aeterno ei mei. At nam magna explicari, cu eam error viderer. Te atqui aeque referrentur per, vel simul commodo ei, splendide vulputate in eum.",
          createdAt: new Date(),
          tags: ["close", "reject", "reopen"]
        }, {
          title: "Ticket 027 - Resolved",
          content: "Lorem ipsum dolor sit amet, vis quot iusto accusata in, tantas sanctus sit an. Ne pro suas alterum, justo alienum usu ex. Vide aeterno ei mei. At nam magna explicari, cu eam error viderer. Te atqui aeque referrentur per, vel simul commodo ei, splendide vulputate in eum.",
          createdAt: new Date(),
          tags: ["close", "reject", "reopen"]
        }];
      });
    };

    return Server;
  }();
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
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./value-converters/activity-type-to-route', './value-converters/date', './elements/rich-text-editor']);
  }
});
define('tickets/thread',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-router', 'resources/dialogs/common-dialogs', 'resources/messages/tab-opened', 'backend/server'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaRouter, _commonDialogs, _tabOpened, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Thread = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Thread = exports.Thread = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaRouter.Router, _commonDialogs.CommonDialogs, _aureliaEventAggregator.EventAggregator, _server.User), _dec(_class = function () {
    function Thread(server, router, commonDialogs, eventAggregator, user) {
      _classCallCheck(this, Thread);

      this.server = server;
      this.router = router;
      this.commonDialogs = commonDialogs;
      this.eventAggregator = eventAggregator;
      this.user = user;
    }

    Thread.prototype.getParticipant = function getParticipant(id) {
      return this.ticket.participants.find(function (x) {
        return x.id == id;
      });
    };

    Thread.prototype.save = function save() {
      var _this = this;

      var isNew = this.ticket.id == 0;
      this.server.saveTicket(this.ticket).then(function (ticket) {
        _this.ticket = ticket;

        if (isNew) {
          _this.router.navigateToRoute('thread', { id: ticket.id }, { replace: true, trigger: false });
          _this.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
        }
      });
    };

    Thread.prototype.submit = function submit(status) {
      if (this.message) {
        if (!this.getParticipant(this.user.id)) {
          this.ticket.participants.push(this.user);
        }

        this.ticket.posts.unshift({
          createdAt: new Date(),
          fromId: this.user.id,
          content: this.message
        });

        this.message = '';
      }

      this.ticket.status = status;
      this.save();
    };

    Thread.prototype.canActivate = function canActivate(params) {
      var _this2 = this;

      if (params.id == 'new') {
        if (params.title) {
          this.ticket = this.server.createTicket(params.title);
          this.from = this.getParticipant(this.ticket.fromId);
          return true;
        }

        return this.commonDialogs.prompt('Please provide a name for the Ticket!').then(function (response) {
          if (response.wasCancelled) {
            return false;
          }

          return new _aureliaRouter.RedirectToRoute('thread', { id: 'new', title: response.output });
        });
      }

      return this.server.getTicketDetails(parseInt(params.id)).then(function (ticket) {
        if (ticket) {
          _this2.ticket = ticket;
          _this2.from = _this2.getParticipant(ticket.fromId);
          _this2.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
          return true;
        }

        return new _aureliaRouter.RedirectToRoute('home');
      });
    };

    Thread.prototype.activate = function activate(params) {
      this.message = '';
    };

    Thread.prototype.canDeactivate = function canDeactivate() {
      if (this.ticket.id === 0) {
        var message = 'You have created a ticket but have not yet posted it with a status. If you leave now, your work will be lost. Do you wish to continue?';

        return this.commonDialogs.showMessage(message, 'Ticket Not Saved', ['Yes', 'No']).then(function (response) {
          return !response.wasCancelled;
        });
      }

      return true;
    };

    return Thread;
  }()) || _class);
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
define('shell/shell',['exports', 'aurelia-framework', 'backend/server', 'resources/messages/tab-opened', './routes', 'resources/dialogs/common-dialogs'], function (exports, _aureliaFramework, _server, _tabOpened, _routes, _commonDialogs) {
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

  var Shell = exports.Shell = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia, _server.User, _commonDialogs.CommonDialogs), _dec(_class = function () {
    function Shell(aurelia, user, commonDialogs) {
      _classCallCheck(this, Shell);

      this.aurelia = aurelia;
      this.user = user;
      this.tabs = [];
      this.commonDialogs = commonDialogs;
    }

    Shell.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes2.default);
    };

    Shell.prototype.bind = function bind() {
      var _this = this;

      this.navigationCompleteSub = this.aurelia.subscribe('router:navigation:complete', function (msg) {
        return _this.onNavigationComplete(msg);
      });
      this.tabOpenedSub = this.aurelia.subscribe(_tabOpened.TabOpened, function (msg) {
        return _this.onTabOpened(msg);
      });
    };

    Shell.prototype.unbind = function unbind() {
      this.navigationCompleteSub.dispose();
      this.tabOpenedSub.dispose();
    };

    Shell.prototype.closeTab = function closeTab(tab) {
      var index = this.tabs.indexOf(tab);

      if (index === -1) {
        return;
      }

      this.tabs.splice(index, 1);

      if (!tab.isActive) {
        return;
      }

      var next = this.tabs[0];

      if (next) {
        this.router.navigateToRoute(next.route, next.params, true);
      } else {
        this.router.navigateToRoute('home', true);
      }
    };

    Shell.prototype.logout = function logout() {
      var _this2 = this;

      if (this.tabs.length > 0) {
        var message = 'You have ' + this.tabs.length + ' open tab(s). Are you sure you want to logout?';

        this.commonDialogs.showMessage(message, 'Logout', ['Yes', 'No']).then(function (response) {
          if (!response.wasCancelled) {
            _this2._doLogout();
          }
        });
      } else {
        this._doLogout();
      }
    };

    Shell.prototype._doLogout = function _doLogout() {
      this.aurelia.setRoot('login/login');
      this.aurelia.container.unregister(_server.User);
      this.router.reset();
      this.router.deactivate();
      this.tabs = [];
    };

    Shell.prototype.onTabOpened = function onTabOpened(tab) {
      var existing = this.tabs.find(function (x) {
        return x.matches(tab);
      });

      if (!existing) {
        this.tabs.push(tab);
      }
    };

    Shell.prototype.onNavigationComplete = function onNavigationComplete(msg) {
      if (!msg.result.completed) {
        return;
      }

      this.tabs.forEach(function (x) {
        return x.updateActivation(msg.instruction);
      });
    };

    return Shell;
  }()) || _class);
});
define('resources/dialogs/common-dialogs',['exports', 'aurelia-framework', 'aurelia-dialog', './message-box', './prompt'], function (exports, _aureliaFramework, _aureliaDialog, _messageBox, _prompt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CommonDialogs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CommonDialogs = exports.CommonDialogs = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogService), _dec(_class = function () {
    function CommonDialogs(dialogService) {
      _classCallCheck(this, CommonDialogs);

      this.dialogService = dialogService;
    }

    CommonDialogs.prototype.showMessage = function showMessage(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Message';
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Ok'];

      return this.dialogService.open({ viewModel: _messageBox.MessageBox, model: { message: message, title: title, options: options } });
    };

    CommonDialogs.prototype.prompt = function prompt(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Info Box';

      return this.dialogService.open({ viewModel: _prompt.Prompt, model: { message: message, title: title } });
    };

    return CommonDialogs;
  }()) || _class);
});
define('resources/dialogs/message-box',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MessageBox = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MessageBox = exports.MessageBox = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function MessageBox(dialogController) {
      _classCallCheck(this, MessageBox);

      this.dialogController = dialogController;
    }

    MessageBox.prototype.activate = function activate(model) {
      this.model = model;
    };

    MessageBox.prototype.selectOption = function selectOption(option) {
      if (isCancel(option)) {
        this.dialogController.cancel(option);
      } else {
        this.dialogController.ok(option);
      }
    };

    return MessageBox;
  }()) || _class);


  function isCancel(option) {
    return ['cancel', 'no'].indexOf(option.toLowerCase()) !== -1;
  }
});
define('resources/dialogs/prompt',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Prompt = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Prompt = exports.Prompt = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function Prompt(dialogController) {
      _classCallCheck(this, Prompt);

      this.dialogController = dialogController;
      this.answer = null;
    }

    Prompt.prototype.activate = function activate(model) {
      this.model = model;
    };

    Prompt.prototype.ok = function ok() {
      if (this.answer) {
        this.dialogController.ok(this.answer);
      }
    };

    Prompt.prototype.cancel = function cancel() {
      this.dialogController.cancel();
    };

    return Prompt;
  }()) || _class);
});
define('resources/messages/tab-opened',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TabOpened = exports.TabOpened = function () {
    function TabOpened(title, route, params) {
      _classCallCheck(this, TabOpened);

      this.title = title;
      this.route = route;
      this.params = params || {};
      this.isActive = true;
    }

    TabOpened.prototype.updateActivation = function updateActivation(instruction) {
      if (this.route !== instruction.config.name) {
        this.isActive = false;
        return;
      }

      var params = instruction.params;

      for (var key in params) {
        if (params[key] !== this.params[key].toString()) {
          this.isActive = false;
          return;
        }
      }

      this.isActive = true;
    };

    TabOpened.prototype.matches = function matches(other) {
      if (this.route !== other.route) {
        return false;
      }

      for (var key in other.params) {
        if (other.params[key] !== this.params[key]) {
          return false;
        }
      }

      return true;
    };

    return TabOpened;
  }();
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
define('aurelia-dialog/ai-dialog',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialog = undefined;

  

  var _dec, _dec2, _class;

  var AiDialog = exports.AiDialog = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialog() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-header',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogHeader = undefined;

  

  var _dec, _dec2, _class, _class2, _temp;

  var AiDialogHeader = exports.AiDialogHeader = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-header'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), _dec(_class = _dec2(_class = (_temp = _class2 = function AiDialogHeader(controller) {
    

    this.controller = controller;
  }, _class2.inject = [_dialogController.DialogController], _temp)) || _class) || _class);
});
define('aurelia-dialog/dialog-controller',['exports', './lifecycle', './dialog-result'], function (exports, _lifecycle, _dialogResult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogController = undefined;

  

  var DialogController = exports.DialogController = function () {
    function DialogController(renderer, settings, resolve, reject) {
      

      this.renderer = renderer;
      this.settings = settings;
      this._resolve = resolve;
      this._reject = reject;
    }

    DialogController.prototype.ok = function ok(output) {
      return this.close(true, output);
    };

    DialogController.prototype.cancel = function cancel(output) {
      return this.close(false, output);
    };

    DialogController.prototype.error = function error(message) {
      var _this = this;

      return (0, _lifecycle.invokeLifecycle)(this.viewModel, 'deactivate').then(function () {
        return _this.renderer.hideDialog(_this);
      }).then(function () {
        _this.controller.unbind();
        _this._reject(message);
      });
    };

    DialogController.prototype.close = function close(ok, output) {
      var _this2 = this;

      if (this._closePromise) {
        return this._closePromise;
      }

      this._closePromise = (0, _lifecycle.invokeLifecycle)(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
        if (canDeactivate) {
          return (0, _lifecycle.invokeLifecycle)(_this2.viewModel, 'deactivate').then(function () {
            return _this2.renderer.hideDialog(_this2);
          }).then(function () {
            var result = new _dialogResult.DialogResult(!ok, output);
            _this2.controller.unbind();
            _this2._resolve(result);
            return result;
          });
        }

        _this2._closePromise = undefined;
      }, function (e) {
        _this2._closePromise = undefined;
        return Promise.reject(e);
      });

      return this._closePromise;
    };

    return DialogController;
  }();
});
define('aurelia-dialog/lifecycle',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.invokeLifecycle = invokeLifecycle;
  function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
      var result = instance[name](model);

      if (result instanceof Promise) {
        return result;
      }

      if (result !== null && result !== undefined) {
        return Promise.resolve(result);
      }

      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
});
define('aurelia-dialog/dialog-result',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var DialogResult = exports.DialogResult = function DialogResult(cancelled, output) {
    

    this.wasCancelled = false;

    this.wasCancelled = cancelled;
    this.output = output;
  };
});
define('aurelia-dialog/ai-dialog-body',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogBody = undefined;

  

  var _dec, _dec2, _class;

  var AiDialogBody = exports.AiDialogBody = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-body'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialogBody() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-footer',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogFooter = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

  var AiDialogFooter = exports.AiDialogFooter = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-footer'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function AiDialogFooter(controller) {
      

      _initDefineProp(this, 'buttons', _descriptor, this);

      _initDefineProp(this, 'useDefaultButtons', _descriptor2, this);

      this.controller = controller;
    }

    AiDialogFooter.prototype.close = function close(buttonValue) {
      if (AiDialogFooter.isCancelButton(buttonValue)) {
        this.controller.cancel(buttonValue);
      } else {
        this.controller.ok(buttonValue);
      }
    };

    AiDialogFooter.prototype.useDefaultButtonsChanged = function useDefaultButtonsChanged(newValue) {
      if (newValue) {
        this.buttons = ['Cancel', 'Ok'];
      }
    };

    AiDialogFooter.isCancelButton = function isCancelButton(value) {
      return value === 'Cancel';
    };

    return AiDialogFooter;
  }(), _class3.inject = [_dialogController.DialogController], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'buttons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'useDefaultButtons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-dialog/attach-focus',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttachFocus = undefined;

  

  var _dec, _class, _class2, _temp;

  var AttachFocus = exports.AttachFocus = (_dec = (0, _aureliaTemplating.customAttribute)('attach-focus'), _dec(_class = (_temp = _class2 = function () {
    function AttachFocus(element) {
      

      this.value = true;

      this.element = element;
    }

    AttachFocus.prototype.attached = function attached() {
      if (this.value && this.value !== 'false') {
        this.element.focus();
      }
    };

    AttachFocus.prototype.valueChanged = function valueChanged(newValue) {
      this.value = newValue;
    };

    return AttachFocus;
  }(), _class2.inject = [Element], _temp)) || _class);
});
define('aurelia-dialog/dialog-configuration',['exports', './renderer', './dialog-renderer', './dialog-options', 'aurelia-pal'], function (exports, _renderer, _dialogRenderer, _dialogOptions, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogConfiguration = undefined;

  

  var defaultRenderer = _dialogRenderer.DialogRenderer;

  var resources = {
    'ai-dialog': './ai-dialog',
    'ai-dialog-header': './ai-dialog-header',
    'ai-dialog-body': './ai-dialog-body',
    'ai-dialog-footer': './ai-dialog-footer',
    'attach-focus': './attach-focus'
  };

  var defaultCSSText = 'ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}';

  var DialogConfiguration = exports.DialogConfiguration = function () {
    function DialogConfiguration(aurelia) {
      

      this.aurelia = aurelia;
      this.settings = _dialogOptions.dialogOptions;
      this.resources = [];
      this.cssText = defaultCSSText;
      this.renderer = defaultRenderer;
    }

    DialogConfiguration.prototype.useDefaults = function useDefaults() {
      return this.useRenderer(defaultRenderer).useCSS(defaultCSSText).useStandardResources();
    };

    DialogConfiguration.prototype.useStandardResources = function useStandardResources() {
      return this.useResource('ai-dialog').useResource('ai-dialog-header').useResource('ai-dialog-body').useResource('ai-dialog-footer').useResource('attach-focus');
    };

    DialogConfiguration.prototype.useResource = function useResource(resourceName) {
      this.resources.push(resourceName);
      return this;
    };

    DialogConfiguration.prototype.useRenderer = function useRenderer(renderer, settings) {
      this.renderer = renderer;
      this.settings = Object.assign(this.settings, settings || {});
      return this;
    };

    DialogConfiguration.prototype.useCSS = function useCSS(cssText) {
      this.cssText = cssText;
      return this;
    };

    DialogConfiguration.prototype._apply = function _apply() {
      var _this = this;

      this.aurelia.transient(_renderer.Renderer, this.renderer);
      this.resources.forEach(function (resourceName) {
        return _this.aurelia.globalResources(resources[resourceName]);
      });

      if (this.cssText) {
        _aureliaPal.DOM.injectStyles(this.cssText);
      }
    };

    return DialogConfiguration;
  }();
});
define('aurelia-dialog/renderer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Renderer = exports.Renderer = function () {
    function Renderer() {
      
    }

    Renderer.prototype.getDialogContainer = function getDialogContainer() {
      throw new Error('DialogRenderer must implement getDialogContainer().');
    };

    Renderer.prototype.showDialog = function showDialog(dialogController) {
      throw new Error('DialogRenderer must implement showDialog().');
    };

    Renderer.prototype.hideDialog = function hideDialog(dialogController) {
      throw new Error('DialogRenderer must implement hideDialog().');
    };

    return Renderer;
  }();
});
define('aurelia-dialog/dialog-renderer',['exports', 'aurelia-pal', 'aurelia-dependency-injection'], function (exports, _aureliaPal, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogRenderer = undefined;

  

  var _dec, _class;

  var containerTagName = 'ai-dialog-container';
  var overlayTagName = 'ai-dialog-overlay';
  var transitionEvent = function () {
    var transition = null;

    return function () {
      if (transition) return transition;

      var t = void 0;
      var el = _aureliaPal.DOM.createElement('fakeelement');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
          return transition;
        }
      }
    };
  }();

  var DialogRenderer = exports.DialogRenderer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
    function DialogRenderer() {
      var _this = this;

      

      this._escapeKeyEventHandler = function (e) {
        if (e.keyCode === 27) {
          var top = _this._dialogControllers[_this._dialogControllers.length - 1];
          if (top && top.settings.lock !== true) {
            top.cancel();
          }
        }
      };
    }

    DialogRenderer.prototype.getDialogContainer = function getDialogContainer() {
      return _aureliaPal.DOM.createElement('div');
    };

    DialogRenderer.prototype.showDialog = function showDialog(dialogController) {
      var _this2 = this;

      var settings = dialogController.settings;
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];
      var wrapper = document.createElement('div');

      this.modalOverlay = _aureliaPal.DOM.createElement(overlayTagName);
      this.modalContainer = _aureliaPal.DOM.createElement(containerTagName);
      this.anchor = dialogController.slot.anchor;
      wrapper.appendChild(this.anchor);
      this.modalContainer.appendChild(wrapper);

      this.stopPropagation = function (e) {
        e._aureliaDialogHostClicked = true;
      };
      this.closeModalClick = function (e) {
        if (!settings.lock && !e._aureliaDialogHostClicked) {
          dialogController.cancel();
        } else {
          return false;
        }
      };

      dialogController.centerDialog = function () {
        if (settings.centerHorizontalOnly) return;
        centerDialog(_this2.modalContainer);
      };

      this.modalOverlay.style.zIndex = settings.startingZIndex;
      this.modalContainer.style.zIndex = settings.startingZIndex;

      var lastContainer = Array.from(body.querySelectorAll(containerTagName)).pop();

      if (lastContainer) {
        lastContainer.parentNode.insertBefore(this.modalContainer, lastContainer.nextSibling);
        lastContainer.parentNode.insertBefore(this.modalOverlay, lastContainer.nextSibling);
      } else {
        body.insertBefore(this.modalContainer, body.firstChild);
        body.insertBefore(this.modalOverlay, body.firstChild);
      }

      if (!this._dialogControllers.length) {
        _aureliaPal.DOM.addEventListener('keyup', this._escapeKeyEventHandler);
      }

      this._dialogControllers.push(dialogController);

      dialogController.slot.attached();

      if (typeof settings.position === 'function') {
        settings.position(this.modalContainer, this.modalOverlay);
      } else {
        dialogController.centerDialog();
      }

      this.modalContainer.addEventListener('click', this.closeModalClick);
      this.anchor.addEventListener('click', this.stopPropagation);

      return new Promise(function (resolve) {
        var renderer = _this2;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this2.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this2.modalOverlay.classList.add('active');
        _this2.modalContainer.classList.add('active');
        body.classList.add('ai-dialog-open');

        function onTransitionEnd(e) {
          if (e.target !== renderer.modalContainer) {
            return;
          }
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      });
    };

    DialogRenderer.prototype.hideDialog = function hideDialog(dialogController) {
      var _this3 = this;

      var settings = dialogController.settings;
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];

      this.modalContainer.removeEventListener('click', this.closeModalClick);
      this.anchor.removeEventListener('click', this.stopPropagation);

      var i = this._dialogControllers.indexOf(dialogController);
      if (i !== -1) {
        this._dialogControllers.splice(i, 1);
      }

      if (!this._dialogControllers.length) {
        _aureliaPal.DOM.removeEventListener('keyup', this._escapeKeyEventHandler);
      }

      return new Promise(function (resolve) {
        var renderer = _this3;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this3.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this3.modalOverlay.classList.remove('active');
        _this3.modalContainer.classList.remove('active');

        function onTransitionEnd() {
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      }).then(function () {
        body.removeChild(_this3.modalOverlay);
        body.removeChild(_this3.modalContainer);
        dialogController.slot.detached();

        if (!_this3._dialogControllers.length) {
          body.classList.remove('ai-dialog-open');
        }

        return Promise.resolve();
      });
    };

    return DialogRenderer;
  }()) || _class);


  DialogRenderer.prototype._dialogControllers = [];

  function centerDialog(modalContainer) {
    var child = modalContainer.children[0];
    var vh = Math.max(_aureliaPal.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);

    child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
    child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
  }
});
define('aurelia-dialog/dialog-options',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var dialogOptions = exports.dialogOptions = {
    lock: true,
    centerHorizontalOnly: false,
    startingZIndex: 1000,
    ignoreTransitions: false
  };
});
define('aurelia-dialog/dialog-service',['exports', 'aurelia-metadata', 'aurelia-dependency-injection', 'aurelia-templating', './dialog-controller', './renderer', './lifecycle', './dialog-result', './dialog-options'], function (exports, _aureliaMetadata, _aureliaDependencyInjection, _aureliaTemplating, _dialogController, _renderer, _lifecycle, _dialogResult, _dialogOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogService = undefined;

  

  var _class, _temp;

  var DialogService = exports.DialogService = (_temp = _class = function () {
    function DialogService(container, compositionEngine) {
      

      this.container = container;
      this.compositionEngine = compositionEngine;
      this.controllers = [];
      this.hasActiveDialog = false;
    }

    DialogService.prototype.open = function open(settings) {
      return this.openAndYieldController(settings).then(function (controller) {
        return controller.result;
      });
    };

    DialogService.prototype.openAndYieldController = function openAndYieldController(settings) {
      var _this = this;

      var childContainer = this.container.createChild();
      var dialogController = void 0;
      var promise = new Promise(function (resolve, reject) {
        dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), _createSettings(settings), resolve, reject);
      });
      childContainer.registerInstance(_dialogController.DialogController, dialogController);
      dialogController.result = promise;
      dialogController.result.then(function () {
        _removeController(_this, dialogController);
      }, function () {
        _removeController(_this, dialogController);
      });
      return _openDialog(this, childContainer, dialogController).then(function () {
        return dialogController;
      });
    };

    return DialogService;
  }(), _class.inject = [_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine], _temp);


  function _createSettings(settings) {
    settings = Object.assign({}, _dialogOptions.dialogOptions, settings);
    settings.startingZIndex = _dialogOptions.dialogOptions.startingZIndex;
    return settings;
  }

  function _openDialog(service, childContainer, dialogController) {
    var host = dialogController.renderer.getDialogContainer();
    var instruction = {
      container: service.container,
      childContainer: childContainer,
      model: dialogController.settings.model,
      view: dialogController.settings.view,
      viewModel: dialogController.settings.viewModel,
      viewSlot: new _aureliaTemplating.ViewSlot(host, true),
      host: host
    };

    return _getViewModel(instruction, service.compositionEngine).then(function (returnedInstruction) {
      dialogController.viewModel = returnedInstruction.viewModel;
      dialogController.slot = returnedInstruction.viewSlot;

      return (0, _lifecycle.invokeLifecycle)(dialogController.viewModel, 'canActivate', dialogController.settings.model).then(function (canActivate) {
        if (canActivate) {
          return service.compositionEngine.compose(returnedInstruction).then(function (controller) {
            service.controllers.push(dialogController);
            service.hasActiveDialog = !!service.controllers.length;
            dialogController.controller = controller;
            dialogController.view = controller.view;

            return dialogController.renderer.showDialog(dialogController);
          });
        }
      });
    });
  }

  function _getViewModel(instruction, compositionEngine) {
    if (typeof instruction.viewModel === 'function') {
      instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
    }

    if (typeof instruction.viewModel === 'string') {
      return compositionEngine.ensureViewModel(instruction);
    }

    return Promise.resolve(instruction);
  }

  function _removeController(service, controller) {
    var i = service.controllers.indexOf(controller);
    if (i !== -1) {
      service.controllers.splice(i, 1);
      service.hasActiveDialog = !!service.controllers.length;
    }
  }
});
define('resources/elements/rich-text-editor',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RichTextEditor = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  CKEDITOR.config.skin = 'bootstrapck';

  var RichTextEditor = exports.RichTextEditor = (_dec = (0, _aureliaFramework.inject)(Element, _aureliaFramework.TaskQueue), _dec2 = (0, _aureliaFramework.noView)(), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function RichTextEditor(element, taskQueue) {
      _classCallCheck(this, RichTextEditor);

      _initDefineProp(this, 'value', _descriptor, this);

      this.element = element;
      this.taskQueue = taskQueue;
      this.guard = false;
    }

    RichTextEditor.prototype.created = function created(owningView) {
      var _this = this;

      var original = owningView.removeNodes;
      var that = this;

      owningView.removeNodes = function () {
        _this.editor.destroy();
        original.call(owningView);
      };
    };

    RichTextEditor.prototype.bind = function bind() {
      var _this2 = this;

      this.editor = CKEDITOR.appendTo(this.element, { removePlugins: 'resize, elementspath' }, this.value);

      this.editor.on('change', function () {
        var newValue = _this2.editor.getData();

        if (_this2.value === newValue) {
          return;
        }

        _this2.guard = true;
        _this2.value = newValue;
        _this2.taskQueue.queueMicroTask(function () {
          return _this2.guard = false;
        });
      });
    };

    RichTextEditor.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (this.guard || !this.editor) {
        return;
      }

      this.editor.setData(newValue);
    };

    return RichTextEditor;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('text!home/activity-list.html', ['module'], function(module) { module.exports = "<template bindable=\"activity\">\n  <ul>\n    <li repeat.for=\"a of activity\" class=\"activity\">\n      <!--Note: The activity type isn't the same as the route. What do we do?-->\n      <a route-href=\"route.bind: a.type | activityTypeToRoute; params.bind: { id: a.associatedId }\">\n        <div class=\"well\">\n          <div class=\"avatar\">\n            <img src=\"${a.createdBy.iconUrl}\">\n          </div>\n          <div class=\"body\">\n            <div class=\"title\" innerhtml.bind=\"a.title\"></div>\n            <div class=\"content\">${a.content}</div>\n            <div class=\"date\">${a.createdAt | date}</div> <!--TODO: Add nicer date format. -->\n          </div>\n        </div>\n      </a>\n    </li>\n  </ul>\n</template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./activity-list.html\"></require>\n  <require from=\"./news-list.html\"></require>\n  \n  <div>\n    <div class=\"header\">\n      <div class=\"header-left\">Activity</div>\n      <div class=\"header-right\">Benchmarks &amp; Resolved Tickets</div>\n    </div>\n\n    <div class=\"sidebar\">\n      <activity-list activity.bind=\"activity\"></activity-list>\n    </div>\n\n    <div class=\"detail-container\">\n      <div class=\"row1x2\">\n        <!--TODO: Add Charts Here-->\n      </div>\n      <div class=\"row2x2\">\n        <news-list news.bind=\"news\"></news-list><!--TODO: Add News List Here-->\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!home/news-list.html', ['module'], function(module) { module.exports = "<template bindable=\"news\" class=\"news\">\n  \n  <template repeat.for=\"n of news\"><!--One of these for each item in the news array.-->\n    <h1>${n.title}</h1>\n    <p>${n.content}</p>\n    <div>\n      <span class=\"badge badge-success\">${n.createdAt | date}</span>\n      <div class=\"pull-right\">\n        <!--One of these for each tag in the news.tags array.-->\n        <span repeat.for=\"tag of n.tags\" class=\"badge\">${tag}</span>\n      </div>\n    </div>\n    <hr>\n  </template> \n\n</template>\n"; });
define('text!login/login.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"login\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 logo\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 well\">\n        <div class=\"alert alert-danger\" show.bind=\"message\">${message}</div> <!--Display the message property here, only if present.-->\n\n        <form role=\"form\" class=\"form-horizontal\" submit.trigger=\"login()\"><!--Invoke login on form submit.-->\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Username</label>\n            <div class=\"col-sm-10\">\n              <input value.bind=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\"><!--Bind the username.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input value.bind=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\"><!--Bind the password.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10 text-right\">\n              <!--Disable the button if there isn't both a username and password.-->\n              <button disabled.bind=\"!username || !password\" type=\"submit\" class=\"btn btn-success\">Log In</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!shell/header.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <ul class=\"nav navbar-nav tabs\">\n      <!--TODO: Add Tabs UI-->\n      <li repeat.for=\"tab of tabs\" class=\"${tab.isActive ? 'active' : ''}\"><!--One li per tab; Apply active class when tab.isActive-->\n        <a route-href=\"route.bind: tab.route; params.bind: tab.params\">${tab.title}</a><!--This link should navigate to the tab using tab.route and tab.params.-->\n        <a href=\"#\" click.trigger=\"closeTab(tab)\"><!--This link should invoke closeTab and pass the tab.-->\n          <i class=\"fa fa-times\"></i>\n        </a>\n      </li>\n\n      <!--END OF TAbUI: Add Tabs UI-->\n      <li class=\"dropdown add\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <i class=\"fa fa-plus\"></i>add\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a route-href=\"route: thread; params.bind: { id:'new' }\"><i class=\"icon-ticket\"></i> New Ticket</a>\n          </li>\n          <li>\n            <a route-href=\"route: user; params.bind: { id:'new' }\"><i class=\"icon-group\"></i> New User</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"avatar dropdown-toggle\" data-toggle=\"dropdown\">\n          <img src=\"${user.iconUrl}\" title.bind=\"user.username\">\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"presentation\">\n            <a route-href=\"route: settings\"><i class=\"fa fa-cog\"></i> Settings</a>\n          </li>\n          <li role=\"presentation\">\n            <a route-href=\"route: help\"><i class=\"fa fa-envelope\"></i> Help</a>\n          </li>\n          <li role=\"presentation\" class=\"divider\"></li>\n          <li role=\"presentation\">\n            <a href=\"#\" click.trigger=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</template>"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <compose view=\"./sidebar.html\"></compose>\n  <compose view=\"./header.html\"></compose>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"main-nav\">\n    <ul class=\"nav nav-list\">\n      <li repeat.for=\"nav of router.navigation\" class=\"${nav.isActive ? 'active' : ''}\"> <!--One li per item in router.navigation; apply the active class if items.isActive-->\n        <a href.bind=\"nav.href\"> <!--Bind the href to item.href-->\n          <i class=\"fa ${nav.settings.iconClass}\"></i> <!--Add the icon class based on settings.-->\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n"; });
define('text!tickets/thread.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"ticket\">\n    <div class=\"header\">\n      <div class=\"btn-group\">\n        <a class=\"btn btn-default creator\" route-href=\"route: user; params.bind: { id:ticket.participants[0].id}\" class=\"btn\">\n          <span>${ticket.participants[0].username}</span>\n        </a>\n        <button class=\"btn status active\">\n          <span class=\"badge ${ticket.status}\">${ticket.status}</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"sidebar\">\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Type</label>\n            <select class=\"form-control\">\n              <option>Question</option>\n              <option>Incident</option>\n              <option>Problem</option>\n              <option>Task</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Priority</label>\n            <select class=\"form-control\">\n              <option>Low</option>\n              <option>Normal</option>\n              <option>High</option>\n              <option>Urgent</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Tags</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"tags\" />\n          </div>\n        </form>\n      </div>\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Internal Notes</label>\n            <textarea class=\"form-control\"></textarea>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"detail-container\">\n      <div class=\"header\">\n        <i class=\"fa fa-comments\"></i>\n        <div class=\"content\">\n          <div class=\"title\">${ticket.title}</div>\n          <div class=\"description\">\n            <span>${ticket.createdAt | date}</span>\n            <i class=\"fa fa-circle separator\"></i>\n            <span>${from.firstName} ${from.lastName}</span> &lt;\n            <span>${from.email}</span>&gt;\n          </div>\n        </div>\n      </div>\n\n      <div class=\"thread\">\n        <form class=\"message\">\n          <rich-text-editor value.bind=\"message\"></rich-text-editor>\n        </form>\n\n        <div class=\"btn-group dropup pull-right\">\n          <button click.trigger=\"submit('Solved')\" class=\"btn btn-success\">Submit as Solved</button>\n          <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a href=\"#\" click.trigger=\"submit('Open')\">Submit as Open</a>\n              <a href=\"#\" click.trigger=\"submit('Pending')\">Submit as Pending</a>\n              <a href=\"#\" click.trigger=\"submit('Solved')\">Submit as Solved</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"post-list\">\n          <div repeat.for=\"post of ticket.posts\" class=\"post\">\n            <input type=\"hidden\" model.one-time=\"getParticipant(post.fromId)\" ref=\"participant\">\n            <div class=\"avatar\">\n              <img src=\"${participant.model.avatarUrl}\">\n            </div>\n            <div class=\"body\">\n              <div>\n                <strong>${participant.model.firstName}</strong>\n                <strong>${participant.model.lastName}</strong>\n                <span class=\"createdAt\">${post.createdAt | date}</span>\n              </div>\n              <div>\n                <div>\n                  <p innerhtml.bind=\"post.content\"></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!resources/dialogs/message-box.html', ['module'], function(module) { module.exports = "<template>\n  <ai-dialog style=\"max-width: 350px\">\n    <ai-dialog-header>${model.title}</ai-dialog-header>\n\n    <ai-dialog-body>\n      ${model.message}\n    </ai-dialog-body>\n\n    <ai-dialog-footer>\n      <button repeat.for=\"option of model.options\" click.trigger=\"selectOption(option)\">${option}</button>\n    </ai-dialog-footer>\n  </ai-dialog>\n</template>"; });
define('text!resources/dialogs/prompt.html', ['module'], function(module) { module.exports = "<template>\n  <ai-dialog>\n    <ai-dialog-header>${model.title}</ai-dialog-header>\n\n    <ai-dialog-body>\n      <p>${model.message}</p>\n      <form submit.trigger=\"ok()\"> <!--On submit, ok the dialog w/ the answer response.-->\n        <input type=\"text\" class=\"form-control\" value.bind=\"answer\" attach-focus=\"true\"> <!--Bind the answer.-->\n      </form>\n    </ai-dialog-body>\n\n    <ai-dialog-footer>\n      <button click.trigger=\"cancel()\">Cancel</button><!--Cancel the dialog.-->\n      <button click.trigger=\"ok()\" disabled.bind=\"!answer\">Ok</button><!--Ok the dialog w/ answer response; Disable the button if there's no answer.-->\n    </ai-dialog-footer>\n  </ai-dialog>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map