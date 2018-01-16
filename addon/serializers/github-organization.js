import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = resourceHash.recordId || resourceHash.login
    resourceHash.links = {
      githubUsers: resourceHash.members_url.replace(/\{\/member\}/, ''),
      githubRepositories: resourceHash.repos_url
    }
    return this._super(modelClass, resourceHash, prop);
  }
});
