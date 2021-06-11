const { Post, User } = require('../models/hypemeter.model'); 
// create new user without a user ID
module.exports.newTempUser = (req, res) => {
    User.create({
        liked_posts: [],
    })
        .then( user => res.json(user) )
        .catch( err => res.json(err) );
}
// create new user with a specified user id
module.exports.getUser = (req, res) => {
    User.findOne({ 
        user_id: req.params.user_id,
    })
        .then( user => (
            user !== null
            ? res.json(user)
            : User.create({ 
                user_id: req.params.user_id,
                liked_posts: [],
            })
                .then( post => res.json(post) )
                .catch( err => res.json(err) )
        ))
        .catch( err => res.json(err) );
}

// get individual post object
module.exports.getPost = (req, res) => {
    Post.findOne({ 
        post_id: req.params.post_id,
        site_id: req.params.site_id,
    })
        .then( post => (
            post !== null
            ? res.json(post)
            : Post.create({ 
                post_id: req.params.post_id,
                site_id: req.params.site_id,
                likes: 0,
            })
                .then( post => res.json(post) )
                .catch( err => res.json(err) )
        ))
        .catch( err => res.json(err) );
}
// increment post's likes 
module.exports.toggleLike = (req, res) => {
    // get user
    User.findById(req.body.user_id)
        .then(user => {
            const liked = user.liked_posts.includes(req.params.id)
            // update liked posts
            user.liked_posts = (
                liked
                ? user.liked_posts.filter( id => id !== req.params.id)
                : [...user.liked_posts, req.params.id]
            )
            user.save();
            // update post's likes
            return Post.findOneAndUpdate(
                { 
                    post_id: req.params.post_id,
                    site_id: req.params.site_id,
                }, 
                { $inc: { 'likes': ( liked ? -1 : 1 ) } }
            )
                .then( post => res.json({ message: 'like toggle was successful' }) )
                .catch( err => res.json(err) );
        })
        .catch(err => res.json(err));
}