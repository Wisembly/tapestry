var GitHubApi = require('github');
var prompt = require('prompt');
var chalk = require('chalk');

global.Gh = new GitHubApi({
  version: '3.0.0',
  // debug: true,
  debug: false,
  protocol: 'https',
  host: 'api.github.com',
  timeout: 5000,
  headers: {
    'user-agent': 'Tapestry-GitHub-App'
  }
});

global.prompt = prompt;

prompt.start();
prompt.message = chalk.gray('- ');
prompt.delimiter = "";
