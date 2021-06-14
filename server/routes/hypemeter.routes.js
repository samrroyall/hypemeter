const HypemeterController = require('../controllers/hypemeter.controller');

module.exports = app => {
    app.get('/api/temp-user', HypemeterController.newTempUser);
    app.post('/api/user/:user_id', HypemeterController.getUser);
    app.get('/api/:site_id/post/:post_id', HypemeterController.getPost);
    app.put('/api/:site_id/post/:post_id/toggle', HypemeterController.toggleLike);
}