


function compute(p1, p2)
{
    p1 = document.getElementById("principal").value;
    p2 = document.getElementById("rate").value;
    p3 = document.getElementById("years").value;
        

    var x = 2021 + new Number (p3)
    document.getElementById("comp").innerHTML = "If you deposit " + p1 + 
    "<br/> an an intrest rate of  "+ p2 +"%" + "<br/> You will recive an amount of " + p1* p2*p3 +
    "<br/>in the year " +  x 

    
      
}
function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }