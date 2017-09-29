const grants = (grant, env, session) => {
    grant.addTest('isInstalled', () => !env.APP_SECRET);
    grant.addTest('skipIfAuthenticated', () => !session.token);
    grant.addTest('isAuthenticated', () => session.token);
};
grants.$inject = ['grant', '__env', '$sessionStorage'];
export {grants};
