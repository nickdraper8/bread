const axios = require("axios");
const keys = require('../api_config/api_keys');

export const sendMessage = (phoneNumber, message) => {
    return(
        axios({
            "method":"POST",
            "url":`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json`,
            "headers":{
            "content-type":"application/json",
            "x-rapidapi-host":"twilio-sms.p.rapidapi.com",
            "x-rapidapi-key":keys.twilioKey,
            "useQueryString":true
            },"params":{
            "from":"+19093651823",
            "body":`${message}`,
            "to":`+1${phoneNumber}`
            }, "data": {}
            })
            .then((response)=>{
            console.log(response)
            })
            .catch((error) => console.log( error )
            ))
}