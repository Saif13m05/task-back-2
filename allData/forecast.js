const request = require("request")

const forecast = (latitude , longtitude , callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=06c2b4e91ff4402ba46204133252102&q=" + latitude + "," + longtitude
    
    request({url , json : true} , (error , response) => {
        if(error){
            callback("unable to connect weather api service" , undefined)
        }else if(response.body.error){
            callback(response.body.error.message , undefined)
        }else{
            callback(undefined , response.body.location.name + " , It is : " + response.body.current.condition.text 
                + " , Temp is : " + response.body.current.temp_c)
        }
    })
}

module.exports = forecast