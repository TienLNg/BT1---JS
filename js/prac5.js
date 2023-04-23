/**
 * B1: input
 * number2so (số nguyên dương có 2 chữ số)
 * 
 * B2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: trong hàm, tạo công thức tính
 * lấy số hàng chục
 * doz = Math.floor(num % 100 / 10)
 * unit = num % 100 % 10
 * + num2chuso = doz + unit
 * 
 * 
 * B3: output
 * num2chuso
 * 
 */


function calcNum(){
    
    var num2chuso = document.getElementById("Number2").value;
    var num = document.getElementById("Number2").value;
    
    var num2chuso = Math.floor(num % 100 / 10) + num % 100 % 10;  

    // console.log("num2chuso");

    document.getElementById("txtNotify5").innerHTML = "Tổng = " + num2chuso;

}

document.getElementById("btncalc5").onclick = calcNum;