const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post_id: String,
    site_id: String,
    likes: Number,
}, { timestamps: true });
module.exports.Post = mongoose.model('Post', PostSchema);

const UserSchema = new mongoose.Schema({
    user_id: String,
    liked_posts: [],
}, { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);