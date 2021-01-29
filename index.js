const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs/promises')

async function run() {
    try {
        const expectedBranch = core.getInput('expected-branch');
        const itlyRcStr = await fs.readFile('.itlyrc', 'utf8');
        const itlyRc = JSON.parse(itlyRcStr);
        core.setOutput("detected-branch", itlyRc.Branch);
        if (itlyRc.Branch !== expectedBranch) {
            throw new Error(`Expected Itly branch to be [${expectedBranch}] but got [${itlyRc.Branch}]`);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();