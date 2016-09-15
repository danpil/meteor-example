import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    if (Posts.find().count() === 0) {
        var posts = [
            {
                title: "Title one",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iure porro sunt repudiandae amet saepe asperiores commodi repellendus hic accusamus obcaecati ipsum modi magnam nulla magni vitae ea voluptates dignissimos!",
                published: (new Date()).toLocaleTimeString()
            },
            {
                title: "Title two",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa natus mollitia similique accusamus minus harum magnam eum pariatur rerum fugit ducimus sapiente asperiores quidem molestias repudiandae consequuntur repellendus dolorum placeat.",
                published: (new Date()).toLocaleTimeString()
            }
        ];
        for (var i = 0; i < posts.length; i++) {
            Posts.insert({
                title: posts[i].title,
                text: posts[i].text,
                published: posts[i].published,
            });
        }
    }
});
