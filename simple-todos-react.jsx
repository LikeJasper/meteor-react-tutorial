Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('render-target'));
  });
};
