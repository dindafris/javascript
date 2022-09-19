function hitung(op){
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total;
    if (isNaN(a1) || isNaN(a2)){
        alert("Harap masukkan angka!!");
    }
    else{

        switch(op){
            case "+":
                total = a1+a2;
                frm.hasil.value = total;
                break;
            case "-":
                total = a1 - a2;
                frm.hasil.value = total;
                break;
            case "x":
                total = a1*a2;
                frm.hasil.value = total;
                break;
            case "/":
                total = a1/a2;
                frm.hasil.value = total;
                break;
            case "^":
                total = Math.pow(a1,a2); 
                frm.hasil.value = total;
            default:
                break;
        }
    }
}
