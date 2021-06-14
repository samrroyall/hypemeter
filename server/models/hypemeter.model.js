const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post_id: {type: String, required: true},
    site_id: {type: String, required: true},
    likes: {type: Number, required: true},
}, { timestamps: true });
module.exports.Post = mongoose.model('Post', PostSchema);

const UserSchema = new mongoose.Schema({
    user_id: String,
    liked_posts: [String],
}, { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);