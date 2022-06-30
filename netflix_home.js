var plus = document.getElementById("cross-plus");
var n = 0;
function showDropdown(item){
    // let selectedItem = document.getElementById(`cross-plus-${item}`).style.display;
    if(n==0){
        document.getElementById(`cross-plus-${item}`).style.display = "block";
        
        n = 1;
    }else{
        document.getElementById(`cross-plus-${item}`).style.display = "none";
        n =0;
    }
    // n++;
}
// plus.addEventListener('click', showDropdown());