// routes: login page
// routes: sign up page
// routes: homepage page - public/don't have to be logged in
// routes: dashboard page - requires auth
// routes: edit blog - requires auth
// routes: blog details (includes comments) - public
// routes: create post - requires auth

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;