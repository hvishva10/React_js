function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
            document.getElementById("demo").innerHTML = this.response
        }
    }

    xhttp.open("GET" , './ajex.txt' , true)
    xhttp.send()
    
}