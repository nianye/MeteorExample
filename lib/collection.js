let Blogs = new Mongo.Collection('blogs');
Blogs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: i18n('标题'),
    max: 200
  },
  content: {
    type: String,
    label: i18n('正文'),
    autoform: {
      type: 'summernote',
      settings: {
        height: 50,
        lang: i18n.getLanguage()
      }
    }
  },
  tags: {
    type: [String],
    label: i18n('标签'),
    autoform: { type: 'tags' }
  }
}));
if (Meteor.isClient) window.Blogs = Blogs
export { Blogs };

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('blogs', function () {
    return Blogs.find();
  });
}
