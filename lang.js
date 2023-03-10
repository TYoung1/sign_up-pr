function changeKo(){
    let lang = document.getElementById("lang").value;
    if(lang=="en"){
        location.href="firsteng.html";
    }

}
function changeEn(){
    let lang = document.getElementById("lang").value;
    if(lang=="ko"){
        location.href="firstko.html";
    }

}
function check(selectAll){
    // name이 chk 인 체크박스 
    const checkboxes = document.getElementsByName('chk');
 
 checkboxes.forEach((checkbox) => {
    // this.checked의 상태로 모두변경
   checkbox.checked = selectAll.checked;
 })
}
  function checkSelectAll()  {
    // name이 chk 인 체크박스 
    const checkboxes 
      = document.getElementsByName("chk");
    // 체크박스 checked 상태인 체크박스 
    const checked 
      = document.querySelectorAll('input[name="chk"]:checked');
    // select all 체크박스
    const selectAll 
      = document.querySelector('input[name="all"]');
    // 체크상태인 박스의 갯수와 아래chk박스의 길이를 비교
    if(checkboxes.length === checked.length)  {
        // 같을시 allchk박스 check
      selectAll.checked = true;
    }else {
        // 아닐시 allchk박스 풀기
      selectAll.checked = false;
    }
  }
  function next(){
    let must = document.querySelectorAll('input[class="pil"]:checked');
    
    if(must.length == 2){
        location.href="second.html";
    }
    else{
        document.getElementById("warning").style.display="block";
    }
  }
 
