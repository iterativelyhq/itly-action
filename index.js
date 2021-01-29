const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs')

async function run() {
    try {
        const expectedBranch = core.getInput('expected-branch');
        console.log(
            'Log root dir',
            await fs.readdir('/'),
        );
        console.log(
            'Log local dir',
            await fs.readdir('.'),
        );
        const itlyRcStr = await fs.readFile('.itlyrc', 'utf8');
        console.log('itlyrc', itlyRcStr)
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