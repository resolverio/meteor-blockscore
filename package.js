Package.describe( {
	name   : 'resolver:blockscore',
	summary: 'A Meteor wrapper for BlockScore API',
	version: '0.1.0',
	git    : 'https://github.com/resolverio/meteor-blockscore'
});

Npm.depends({
	'blockscore': '4.0.0'
});

Package.onUse( function ( api ) {
	api.versionsFrom( '1.0' );

	api.addFiles( 'server/blockscore.js', 'server' );
	api.addFiles( 'client/blockscore.js', 'client' );

	if ( api.export ) {
		api.export( 'BlockScore', [ 'server', 'client' ] );
	}
});

Package.onTest( function ( api ) {
	api.use( 'tinytest' );
	api.use( 'blockscore' );
});
