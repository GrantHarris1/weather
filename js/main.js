let zipInput = '';
const url= 'https://api.openweathermap.org/data/2.5/weather?zip=40513&appid=39f71d4438befcf9779a7ef59013d16a';

document.getElementById('sendButton').addEventListener('click',makeGetRequest);
function makeGetRequest() {
    let zipInput = document.getElementById('zipInput').value;
    axios.get(url.replace('40513',zipInput))
    .then(
        (response) => {
            var result = response.data;
            var t = Math.floor(ktoC(result.main.temp));
            document.getElementById('temp').innerText=`Current Temp ${t}F`
            console.log(result);
            function ktoC(temp){
                return ((temp-273.15)*1.8)+32;
                };
                document.getElementById("con").innerText=`Current coditions are ${result.weather[0].main}`;
                
            },
        (error) => {
            console.log(error);
        }
        
            
           
        
    );
}

    //  zip= zip.replace('40513','zipInput') ;     
    