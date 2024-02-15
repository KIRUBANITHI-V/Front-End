function demo(){
    let celsius= Number(document.getElementById("a").value);
    let fahrenheit = (celsius*9/5)+32;
    let result = document.getElementById("b");
    result.innerHTML = fahrenheit+"&deg F"
}