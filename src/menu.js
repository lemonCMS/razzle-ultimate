module.exports = [
  {
    'desc': 'Home',
    'to': '/',
    icon: 'fa-home'
  },
  {
    'desc': 'Forms',
    'to': '/forms',
    icon: 'fa-dollar',
    'children': [
      {
        desc: 'Login',
        to: '/forms/login'
      },
      {
        desc: 'Register',
        to: '/forms/register'
      }
    ]
  },
  {
    'desc': 'Counters',
    'to': '/counters',
    icon: 'fa-building-o',
    children: [
      {
        desc: 'Cookies',
        to: '/counters/cookies'
      },
      {
        desc: 'Localstorage',
        to: '/counters/local'
      }
    ]
  },
  {
    'desc': 'Cookiebar',
    'to': '/cookiebar',
    icon: 'fa-building-o',
    children: [
      {
        desc: 'Fullscreen',
        to: '/cookiebar/fullscreen'
      },
      {
        desc: 'Compact',
        to: '/cookiebar/compact'
      }
    ]
  },
  {
    desc: 'Data fetcher',
    to: '/data',
    icon: 'fa-cog',
    children: [
      {
        desc: 'Fetch',
        to: '/data/fetch'
      },
      {
        desc: 'Defer',
        to: '/data/defer'
      },
      {
        desc: 'Authorize',
        to: '/data/authorize'
      }
    ]
  },
  {
    desc: 'Laravel helpers',
    to: '/laravel',
  },
  {
    desc: 'Sticky component',
    to: '/sticky',
  },
  {
    desc: 'Persist component',
    to: '/sticky',
  }
];
