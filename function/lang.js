function changeKo(){
  //  select value가 en일경우 영문페이지로 이동
    let lang = document.getElementById("lang").value;
    if(lang=="en"){
        location.href="firsteng.html";
    }

}
function changeEn(){
  // select value가 ko일경우 한글페이지로 이동
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
    // 필수칸 체크요소 가져오기
    let must = document.querySelectorAll('input[class="pil"]:checked');
    // 필수 칸은 2개이기떄문에 가져온 체크된필수칸의 개수와 비교 
    if(must.length == 2){
        location.href="second.html";
    }
    // 아닐시 체크하라고 안내글 표시
    else{
        document.getElementById("warning").style.display="block";
    }
  }
 
