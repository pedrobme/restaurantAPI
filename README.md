# restaurantAPI

This project simulate one restaurant API, that each customer has to enroll his information on database and gets an personal check, that can be tracked by an physic card, by his id. Each card must have only one owner and each customer must own only one card. Once a customer has his card, he can purchase products, informing his card ID and the product ID(operator may get product ID by integrated system). The customer may get his check balance anytime he wants, and when finished a check all orders must be reseted for the next customer using that card.

#Routes
## (Route "/customers")
###(POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        name: Joi.string().required(),
        cpf: Joi.string().length(11).required(),
        email: Joi.string().email().required(),
        createdAt: Joi.date()
    }

## (Route "/cards")
###(POST "/create")
  Create one card with new id
  
## (Route "/orders")
###(POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        "check-id": Joi.number().required(),
        "product-id": Joi.number().required(),
        amount: Joi.number().required()
    }
    
## (Route "checks")
###(POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        "card-id": Joi.number().required(),
        "customer-id": Joi.number().required(),
        finishedAt: Joi.date(),
        createdAt: Joi.date()
    }
    
###(GET "/balance/:cardid")
  Receive cardId by req.params, response will be on that format:
    {balance: <Number>}
    
###(DELETE "/balance/:cardid")
  Receive cardId by req.params, check will be deleted and orders reseted.
