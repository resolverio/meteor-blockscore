# meteor-blockscore

A Meteor wrapper for the BlockScore API.


## Dependencies

 * [node-blockscore](https://github.com/BlockScore/blockscore-node) - An API wrapper for the BlockScore API using Node.js.


## TL;DR;

_meteor-blockscore_ exposes the BlockScore API to your Meteor application.

Further information on the BlockScore API and its features is available at [https://manage.blockscore.com/docs/index](https://manage.blockscore.com/docs/index).


## Installation

Install using Meteor:

```sh
$ meteor add resolver:blockscore
```

Put in your server's settings.json:

```javascript
{
	"BlockScore": {
		"apiKey": "<Your BlockScore API Key>"
	}
}
```

and start your server with:

```sh
meteor --settings settings.json
```


## Usage

_BlockScore_ takes one argument - your API key, which you can find in your BlockScore Account.

All of the API categories and methods described in the BlockScore API Documentation ([https://manage.blockscore.com/docs/index](https://manage.blockscore.com/docs/index)) are available in this wrapper **both on the server and the client**:

 * `section` The section of the API method to call (e.g. 'people').
 * `method` The method to call in the given section.
 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

Example:

```javascript
// You can as well pass different API key on each call
var blockScore = new BlockScore( /* apiKey */ );

blockScore.people.list( {}, function ( error, list ) {
	if ( error ) {
		console.error( '[BlockScore]: Error - %o', error );
	} else {
		console.info( '[BlockScore]: List of people - %o', list );
	}
});
```

## Changelog

### v0.1.0
 * Initial release

## Copyright and license

Copyright © 2014 [Resolver](http://resolver.io)

_meteor-blockscore_ is licensed under the [**MIT**](https://github.com/resolverio/meteor-blockscore/blob/master/LICENSE) license.
