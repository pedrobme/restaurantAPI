# restaurantAPI

This project simulates a restaurant API, that each customer has to make an enrollment and gets a personal card ID that will register his actions. The card can be a magnetic or QR code card, a magnetic bracelet for parties, e.g., and it is vinculated to an unic card ID. Each card ID must have only one owner and each customer must own only one card ID. Once a customer have an enrollment and a vinculated card ID to him, he can purchase products providing his card ID and the product ID(that is provided by the integrated system) he wants to have. The customer may know his bill balance anytime he wants, and when finished a bill all orders must be reseted for the next customer using that card ID.

# Routes
## (Route "/customers")
### (POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        name: Joi.string().required(),
        cpf: Joi.string().length(11).required(),
        email: Joi.string().email().required(),
        createdAt: Joi.date()
    }

## (Route "/cards")
### (POST "/create")
  Create one card with new id
  
## (Route "/orders")
### (POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        "check-id": Joi.number().required(),
        "product-id": Joi.number().required(),
        amount: Joi.number().required()
    }
    
## (Route "/checks")
### (POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        "card-id": Joi.number().required(),
        "customer-id": Joi.number().required(),
        finishedAt: Joi.date(),
        createdAt: Joi.date()
    }
    
### (GET "/balance/:cardid")
  Receive cardId by req.params, response will be on that format:
    
     {
        balance: <Numeric>
    }
    
### (DELETE "/finish/:cardid")
  Receive cardId by req.params, check will be deleted and orders reseted.
  
## (Route "/products")
### (POST "/create")
  Receive object by req.body with that object Joi validation:
  
     {
        name: Joi.string().required(),
        price: Joi.number().required()
    }
    
### (PATCH "/uptate/:id")
  Receive product ID by req.params and an object with that object Joi validation:
  
    {
        price: Joi.number().required()
    }
