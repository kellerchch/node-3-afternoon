const swag = require('../models/swag');

module.exports = {
    search: ( req, res, next ) => {
      const { category } = req.query;
      console.log(category)
      if ( !category ) {
        res.status(200).send( swag );
      } else {
          console.log(swag[0]['category'] )
        const filteredSwag = swag.filter( swag => swag.category === category );
        res.status(200).send( filteredSwag );
      }
    }
  };