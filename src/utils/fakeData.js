export const cars = {
  "BMW 418d": {
   "code": "114980",
   "codeType": "NAT",
   "country": "BE",
   "vehicleType": "10"
  },
  "Toyota avensis": {
    "code": "117499",
    "codeType": "NAT",
    "country": "BE",
    "vehicleType": "10"
  },
  "Volkswagen Golf": {
   "code":"101181",
   "codeType":"NAT",                          
   "country":"BE"
  }
} 

export const mainData = { 
  "language" : "nl",
  "partnerReference": [
    {
      "key": "salesId",
      "value":"12345678"
    },       
    {
      "key":"productId",
      "value":"235689"
    }     
  ],
  "policyholder": {
    "address": {
        "city": "Bruxelles",
        "country": "BE",
        "number": "44",
        "street": "Rue des palais"
    },
    "billingAddress": {
        "city" : "Bruxelles",
          "country" : "BE",
          "number" : "45",
          "street" : "Rue   des   palais"                                         
    },
    "person": {
      "birthDate": "1984-12-16",
      "firstName": "John",
      "lastName": "Doe",
      "title": "Mr"
    },
    "contact": {
          "email": "admin@example.com",
          "phone": "+3226592323"
    }        
  },
  "risk": {
    "drivers": [
          {
              "contact": {  
                "email": "john.doe@example.com",
                "phone": "+32478595959"    
              }, 
              "numberOfClaimsLast5Years": "0",
              "person" :  {
          "birthDate": "1984-12-16",
          "firstName": "John",
          "lastName": "Doe",
          "title": "Mr"
              }
         }
      ],
      "vehicle" :  {
          "cascoInsurerCompany": "AXA Belgium", 
          "details": {
              "code": "123470",
              "codeType": "NAT",
              "country": "BE",
              "vehicleType": "10"
          },        
          "firstRegistrationYear" :"2017",
          "identification":  {
              "registration": {
                  "country": "BE",
                  "plate": "1-ABC-123"
              }
          },               
          "invoice" :   {
              "isPurchasedInLast6Months": true,
              "purchasedPriceIncludingVat": {
                  "currency": "EUR",
                  "value" : 1500000
             }
          }
      }    
  },
  "terms": {
    "claimLimit":  {
      "currency":  "EUR",
      "value":  1600000   
    },
    "requestPaperCopy": false,
    "startDate": "2017-12-17",
    "variant": "GAP60"
  }        
}

export const dataPrice = {
  "partnerReference": [
    { "key": "salexId",
      "value": "12345678"
    }
  ]
}

export const emailData = {
  "partnerReference": [
    {
      "key": "salesId",
      "value": "12345678"
    }, {
      "key": "productId",
      "value": "235689"
    }  
  ],            
  "transport": "EMAIL"
}
