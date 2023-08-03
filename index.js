window.onload=()=>{
let botao;
botao=document.querySelector("input[type=button]");
botao.onclick=()=>{
    let item =document.querySelector("input[type=text]");
    let qte=document.querySelector("input[type=number]");
    let tabela=document.querySelector("tbody")
    let linha=`<tr>
    <td>${item.value}</td>
    <td>${qte.value}</td>
   `
   tabela.innerHTML+=linha;
   item.value="";
   qte.value="";

}
}