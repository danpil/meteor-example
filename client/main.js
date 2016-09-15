Template.stream.posts = function () {
    return Posts.find({}, {sort: {published: -1}});
};

Template.editor.events({
    "click #submit-post": function() {
        var published_date = new Date();
        Posts.insert({
            title: document.getElementById("title-area").value,
            text: document.getElementById("editor-area").value,
            published: published_date.toLocaleTimeString()
        })
    }
});

Template.post.events({
    "click .remove": function () {
        Posts.remove(this._id);
    }
});
