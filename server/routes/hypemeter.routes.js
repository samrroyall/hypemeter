const HypemeterController = require('../controllers/hypemeter.controller');

module.exports = app => {
    app.get('/api/user/new', HypemeterController.newUser);
    app.get('/api/:site/post/:id', HypemeterController.getPost);
    app.put('/api/:site/post/:id/toggle', HypemeterController.toggleLike);
}