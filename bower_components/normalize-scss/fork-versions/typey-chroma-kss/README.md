# Fork-able normalize-scss<br> for Typey, Chroma and KSS

## Using with node-sass

1. Copy these files to your Sass project.
2. This fork-able version requires:

  * [chroma](https://github.com/JohnAlbin/chroma)
  * [typey](https://github.com/jptaranto/typey)

  Add them to your package.json with:

 ```bash
npm install --save-dev typey chroma-sass
```

3. Add the dependencies' directories to your nodeSass' [`includePaths` option](https://github.com/sass/node-sass#includepaths).

 ```js
var sass = require('node-sass'),
  path = require('path');

sass.render({
  file: scss_filename,
  includePaths: [
    path.dirname(require.resolve('chroma-sass')),
    path.dirname(require.resolve('typey'))
  ]
}, function(err, result) { /*...*/ });
```

## Using with libSass

If you are not using node-sass with libSass, you probably already know how to include 3rd party libraries into your Sass project.

1. Copy these files to your Sass project.
2. This fork-able version requires the [chroma](https://github.com/JohnAlbin/chroma) Sass module and the [typey](https://github.com/jptaranto/typey) Sass module. Add chroma's `sass` directory and typey's `stylesheets` directory to your libSass include paths in the "usual way".

## Using with Ruby Sass

In addition to copying these files to your Sass project, you'll also need to:

1. Edit your `Gemfile` file to add:

 ```ruby
gem 'chroma-sass', '~> 1.0'
gem 'typey', '~> 1.0.0'
```

2. If you use Compass, edit your `config.rb` file to add:

 ```ruby
require 'chroma-sass'
require 'typey'
```

3. Update your local Gems with:

 ```
bundle install
```
