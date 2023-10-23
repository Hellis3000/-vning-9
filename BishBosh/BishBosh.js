

document.getElementById('button').onclick = function() {
     
        
    bishNr = document.getElementById('bishNr').value
    boshNr = document.getElementById('boshNr').value
    num = document.getElementById('input').value

    result2 = "bosh";
    result1 = "bish";
    result3 = "bish-bosh";

    if(num % bishNr == 0 & num % boshNr != 0){
        console.log(result1)
        num = Math.floor(Math.random() * 101);
        document.getElementById('result').innerHTML = result1
    }
    else if(num % boshNr != 0 & num % bishNr == 0){
        
        console.log(result2)
       document.getElementById('result').innerHTML = result2
       
        
    }
    else if(num % bishNr == 0 && num % boshNr == 0){
        document.getElementById('result').innerHTML = result3
        console.log(result3)
        
    }
    else{
        
        
        console.log(num)

    }
 }
