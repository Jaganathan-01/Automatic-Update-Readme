const fs = require('fs');

const prTitle = process.env.GITHUB_EVENT_NAME === 'pull_request' ? process.env.GITHUB_EVENT_PATH : '';

fs.writeFileSync('title.txt', prTitle);
