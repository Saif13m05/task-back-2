
const { error } = require("console")
const request = require("request")



const forecast = require("./allData/forecast")
const geocode = require("./allData/geocode")


const location = process.argv[2]

geocode(location , (error , data) => {
    console.log("Error : " + error)
    console.log("Data : " + data)
    forecast(data.latitude , data.longtitude , (error , data) => {
        console.log("Error : " + error)
        console.log("Data : " + data)
    })
})

