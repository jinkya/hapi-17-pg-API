const DogController = require('../controllers/dog.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
                id     :  Joi.number(),
				name   :  Joi.string().required(),
				breed  :  Joi.string().alphanum().min(3).max(25).required(),
				age    :  Joi.number()
			});

module.exports = [
		
			{
    			method: 'GET',
    			path: '/dogs',
    			handler: DogController.list,
    			options: {      			
    						tags: ['api'],
        					description: 'GET ALL DOGS',
        					notes: 'Get all the Dogs'
    						}
    		},

    		{
    			method: 'GET',
    			path: '/dogs/{id}',
    			handler: DogController.get,
    			options: {
    						tags: ['api'],
                            description: 'GET DOG by id',
                            notes: 'Get DOG by id',
    			  			validate:{
                					params: Joi.object().keys({
                    											id: Joi.string().required()
                											})
            						}
    					}
  			},

  			{
    			method: 'POST',
    			path: '/dogs',
    			handler: DogController.create,
				options: {
							tags: ['api'],
                            description: 'POST DOG',
                            notes: 'POST DOG',
    			 			validate: {
    			 						payload: schema	
    			 						}
    						}
  			},

  			{
    			method: 'PUT',
    			path: '/dogs/{id}',
    			handler: DogController.update,
    			options: {
    						tags: ['api'],
                            description: 'UPDATE a dog by id',
                            notes: 'UPDATE a dog by id',
                            validate: {
                                        params: Joi.object().keys({
                                                                id: Joi.string().required()
                                                            }),                                
                                        payload: schema
                                        }
    					 }
  			},

  			{
    			method: 'DELETE',
    			path: '/dogs/{id}',
    			handler: DogController.remove,
    			options: {
    						tags: ['api'],
                            description: 'DELETE a dog by id',
                            notes: 'DELETE a dog by id',
    						validate: {
    								params: Joi.object().keys({
                    											id: Joi.string().required()
                											})
    								  }
    					 }
  			}

];