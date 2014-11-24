BlockScore = function ( apiKey ) {
	this._apiKey = apiKey || (
		(
			Meteor.settings &&
			Meteor.settings.BlockScore &&
			Meteor.settings.BlockScore.apiKey
		) ?
			Meteor.settings.BlockScore.apiKey
		:
			apiKey
		);

	this.asyncAPI = Npm.require( 'blockscore' )( this._apiKey );

	this.candidates.asyncAPI    = this.asyncAPI.candidates;
	this.companies.asyncAPI     = this.asyncAPI.companies;
	this.people.asyncAPI        = this.asyncAPI.people;
	this.question_sets.asyncAPI = this.asyncAPI.question_sets;
	this.watchlists.asyncAPI    = this.asyncAPI.watchlists;
};

BlockScore.prototype.candidates = {
	create: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.create, this.asyncAPI );

		return wrapped( params );
	},

	del: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.del, this.asyncAPI );

		return wrapped( params );
	},

	history: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.history, this.asyncAPI );

		return wrapped( params );
	},

	hits: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.hits, this.asyncAPI );

		return wrapped( params );
	},

	list: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.list, this.asyncAPI );

		return wrapped( params );
	},

	retrieve: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.retrieve, this.asyncAPI );

		return wrapped( params );
	},

	update: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.update, this.asyncAPI );

		return wrapped( params );
	}
};

BlockScore.prototype.companies = {
	create: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.create, this.asyncAPI );

		return wrapped( params );
	},

	list: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.list, this.asyncAPI );

		return wrapped( params );
	},

	retrieve: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.retrieve, this.asyncAPI );

		return wrapped( params );
	}
};

BlockScore.prototype.people = {
	create: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.create, this.asyncAPI );

		return wrapped( params );
	},

	list: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.list, this.asyncAPI );

		return wrapped( params );
	},

	retrieve: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.retrieve, this.asyncAPI );

		return wrapped( params );
	}
};

BlockScore.prototype.question_sets = {
	create: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.create, this.asyncAPI );

		return wrapped( params );
	},

	retrieve: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.retrieve, this.asyncAPI );

		return wrapped( params );
	},

	score: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.score, this.asyncAPI );

		return wrapped( params );
	}
};

BlockScore.prototype.watchlists = {
	search: function ( params ) {
		var wrapped = Meteor.wrapAsync( this.asyncAPI.search, this.asyncAPI );

		return wrapped( params );
	}
};

Meteor.methods({
	'BlockScore': function ( section, method, clientAPIKey, params ) {
		var blockScore;

		try {
			blockScore = new BlockScore( clientAPIKey );

			return blockScore[section][method]( params );

		} catch ( error ) {
			throw new Meteor.Error( error.error, error.reason, error.details );
		}
	}
});
