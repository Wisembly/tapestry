module.exports = [
  {
    hash: '/',
    opts: {
      name: 'index'
    }
  }, {
    hash: '/about',
    opts: {
      name: 'about'
    }
  }, {
    hash: '/components',
    opts: {
      name: 'components',
      components: ['a', 'b', 'c']
    }
  }, {
    hash: '/getting-started',
    opts: {
      name: 'getting-started'
    }
  }, {
    hash: '*',
    opts: {
      name: '404'
    }
  }
];
