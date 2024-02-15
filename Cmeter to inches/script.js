function demo(){
    let heightt =Number(document.getElementById("a").value);
    let inch= heightt/2.54;
    let result = document.getElementById("b");
    result.innerHTML=inch.toFixed(2)+" inches"
}