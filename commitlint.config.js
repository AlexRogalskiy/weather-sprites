const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.resolve(__dirname, 'api'));

module.exports = {
    extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
    rules: {
        'scope-enum': [2, 'always', ['release', ...packages]],
    },
}
