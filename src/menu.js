module.exports = [
  {
    desc: 'Home',
    to: '/',
  },
  {
    desc: 'Forms',
    to: '/forms',
    children: [
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
    desc: 'Persistent storage',
    to: '/counters',
    children: [
      {
        desc: 'Cookies',
        to: '/counters/cookie'
      },
      {
        desc: 'Localstorage',
        to: '/counters/local'
      }
    ]
  },
  {
    desc: 'Cookiebar',
    to: '/cookiebar',
    children: [
      {
        desc: 'Fullscreen',
        to: '/cookiebar/fullscreen'
      }
    ]
  },
  {
    desc: 'Data fetcher',
    to: '/data',
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
    children: [
      {
        to: '/sticky/stack',
        desc: 'Stacked'
      }
    ]
  }
];
