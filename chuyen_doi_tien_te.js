function convert(){
    //
let money=document.getElementById('ip').value;
let from=document.getElementById('from').value;
let to=document.getElementById('to').value;

rs=money*to/from;
document.getElementById('rs').innerHTML=('Ket qua'+rs)

}