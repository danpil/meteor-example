Template.stream.posts = function () {
    return Posts.find({}, {sort: {published: -1}});
};
