var $ = require('jquery');
var Post = require('./post');

var how_to_browserify = new Post("How to use browserify");

$('body').append('<h2>' + how_to_browserify.title + '</h2>');
