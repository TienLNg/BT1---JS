/**
 * B1: input
 * Salperday, Numday
 * 
 * B2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: trong hàm, tạo công thức tính
 * + total sal = salperday * numDay
 * 
 * 
 * B3: output
 * Salary (tiền lương của nhân viên)
 * 
 */


function calcSalary(){

    var Salday = document.getElementById("Salperday").value;
    var Num = document.getElementById("Numday").value;

    // console.log("Salday,Num ");

    var totalSal = Salday * Num;

    // console.log("totalSal");

    document.getElementById("txtNotify1").innerHTML = "Tổng lương: " + totalSal.toLocaleString() + " VNĐ"

}

document.getElementById("btncalc1").onclick = calcSalary;