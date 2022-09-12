

const {Octokit} = require("@octokit/core");

async function testPR() {
    const octokit = new Octokit({ auth: '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' }),
    owner = 'GrishmaM',
    repo = 'githubAuto',
    title = 'My Test Pull Request',
    body  = 'This pull request is a test!',
    head  = 'newBranch1',
    base  = 'main';

    const response = await octokit.request(
    `POST /repos/{owner}/{repo}/pulls`, { owner, repo, title, body, head, base }
    );
    console.log('Response ------', response)
} 


var fs = require('fs');
const simpleGit = require('simple-git');
const git = simpleGit();
const shellJs = require('shelljs');
// console.log(shellJs.ls());

async function test() {
    // shellJs.cd('~/Documents/projects/githubAuto');
const repo = 'githubAuto';
const userName = 'GrishmaM';
const password = '3Mgrishma';
const token =  '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'// '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'
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${token}@github.com/${userName}/${repo}`;
// add local git config like username and email
git.addConfig('user.email','grishma.voilet@gmail.com');
git.addConfig('user.name','GrishmaM');



try {
//     await git
//    .clone(gitHubUrl)
//    .then(() => console.log('finished'))
//    .catch((err) => console.error('failed: ', err));
// //    shellJs.cd('./githubAuto');
//    process.chdir('./githubAuto');
//    console.log(shellJs.ls());
 //  await git.init();
   await git.checkoutLocalBranch('newBranch2')

//    await git.addRemote('origin', gitHubUrl);\
   fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
   });
   await git.add('.')
   console.log('adding files done');
   await git.commit('Intial commit by simplegit')
   console.log('commmit done');
   await git.push('origin','newBranch2')
   console.log('repo successfully pushed');
   testPR()
} catch (e) {
   /* handle all errors here */
   console.log(e)
}
}

test()




