document.getElementById("mySubmit").onclick = function () {
    let num = Number(document.getElementById("numberInput").value); 
    let square = num * num; 
    document.getElementById("myh2").textContent = `The square of ${num} is ${square}.`;
};
