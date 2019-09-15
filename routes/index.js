let express = require( 'express' );
let router  = express.Router();

router.get( '/', function ( req, res, next ) {
    res.render( 'index', { title: 'three-browserify-boilerplate' } );
} );

module.exports = router;