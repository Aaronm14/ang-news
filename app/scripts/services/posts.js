'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://aaron-thinkster.firebaseio.com/posts/:id.json');
});