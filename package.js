Package.describe({
  summary: 'Viewable Behaviour (ZeitgeistModel) for Meteor'
});

Package.on_use(function (api) {
  api.use('handlebars', 'client');
  api.use('accounts-base', ['client', 'server']);
  
  api.add_files('lib/client/helpers.js', 'client');
  api.add_files('lib/viewable.js', ['client', 'server']);
  
  api.export('Viewable');
});