var title = 'BlockScore - List of people',
	// Use sandbox API Key
	blockScore = new BlockScore( 'sk_test_42857c65bba33d61895d3bd7c74e0dd9' );

if ( Meteor.isServer ) {
	Tinytest.add( title, function ( test ) {
		blockScore.people.list( {}, function ( error, list ) {
			test.isTrue( list );
		});
	});
}

if ( Meteor.isClient ) {
	testAsyncMulti( title, [
		function ( test, expect ) {
			blockScore.people.list( {}, expect( function ( error, list ) {
				test.isTrue( list );
			}));
		}
	]);
}
