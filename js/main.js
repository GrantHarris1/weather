let zipInput = '';
const url= 'https://api.openweathermap.org/data/2.5/weather?zip=40513&appid=39f71d4438befcf9779a7ef59013d16a';
document.getElementById('sendButton').addEventListener('click',makeGetRequest);

 
 function makeGetRequest() {
    let zipInput = document.getElementById('zipInput').value;
    axios.get(url.replace('40513',zipInput))
    .then(
        (response) => {
            var result = response.data;
            var t = Math.floor(ktoF(result.main.temp));
            var k = Math.floor(result.main.temp);
            var c = Math.floor(ktoC(result.main.temp));
            document.getElementById("hidden").style.visibility = "visible";
            document.getElementById('temp').innerText=`${t}(F)`
            console.log(result);
            function ktoF(temp){
                return ((temp-273.15)*1.8)+32;
                };
                function ktoC(temp){
                    return (temp-273.15);
                };
                 document.getElementById("hidden").onclick = function() {
  
  
        }
                document.getElementById("con").innerText=`Current coditions are ${result.weather[0].main}`;
                document.getElementById("city").innerText=`${result.name}`;
                document.getElementById('tempK').innerText=`${k}(K)`;
                document.getElementById('tempC').innerText=`${c}(C)`;
                popimg(t)
            },
        (error) => {
            console.log(error);
        }
       
        
            
           
        
    );
}
function popimg(t){
    if( t >= 80){
        pic.src = "img/hot.jpg"
    }
    else if (t < 40){
        pic.src = "img/cold.jpg"
       }   else {
        pic.src = "img/mild.jpg"
        }
    

}

    


    //  zip= zip.replace('40513','zipInput') ;     
    