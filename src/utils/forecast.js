const request=require('request')

const forecast=(latitude,longitude,callback)=>{

const url='http://api.weatherstack.com/current?access_key=11a47a64a41aa5054595f0fd3bed26c2&query='+ latitude + ',' + longitude+'&units=m'

    request({url,json:true},(error,{body})=>{
    if(error){
        callback('Unable to connect to weather service!',undefined)
    }else if(body.error){
        callback('Unable to find location',undefined)
    }else{
        callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+'°C out. It feels like '+body.current.feelslike+'°C out.')
    }
})

}

module.exports=forecast