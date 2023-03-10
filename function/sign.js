// 랜덤인증번호 생성
let num= parseInt(Math.random()*10000)
// 포커스를 벗어났을떄 타는함수
function blurIt(num){
    var i;
    var ival = event.currentTarget.value;
    
    if(ival==''){
   document.getElementById(num).style.display= "block"; 
    }
    else{
        document.getElementById(num).style.display= "none"; 
    }
    
}

function rannum(){
    let pn = document.getElementById("pn").value;
    // 전화번호가 형식에 맞을시 인증번호 생성   console 창에 생성
    const numreg =/^[0-9]+$/;
    if(numreg.test(pn)){
        console.log(num);
    }
    else{
        document.getElementById("pd").style.display="block";
    }
}
function inputChk(){
    const numreg =/^[0-9]+$/;
    // 정규식 하나이상의 문자, 숫자 , _!-중한개  , 8글자 이상
    const idreg= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_!-])[A-Za-z\d_!-]{8,}$/;
    const pwreg= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_!-])[A-Za-z\d_!-]{8,}$/;
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    let pwchk = document.getElementById("pwchk").value;
    let name = document.getElementById("name");
    let year = document.getElementById("year").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("mon");
    let email = document.getElementById("email").value;
    let gen = document.getElementById("gender").value;
    let nat = document.getElementById("lo").value;
    let toc = document.getElementById("tochk").value;
    
    // 정규식 테스트
    if(!idreg.test(id)){
        document.getElementById("fir").innerText="아이디는 영소대문자1개이상,숫자1개이상, _ , - , !1개이상(8글자이상)으로 생성하여주세요";
        document.getElementById("fir").style.display="block";
    }else{
         // 정규식 테스트
        if(!pwreg.test(pw)){
            document.getElementById("sec").innerText="비밀번호는 영소대문자1개이상,숫자1개이상, _ , - , !1개이상(8글자이상)으로 생성하여주세요";
            document.getElementById("sec").style.display="block";
        }else{
        //  pw 와 pwchk 일치한지 검사
        if(pw!=pwchk){
            document.getElementById("thi").innerText="비밀번호가 일치하지 않습니다.";
            document.getElementById("thi").style.display="block";
        }
        else{
             if(!numreg.test(year)&& !numreg.test(day)){
                document.getElementById("birth").style.display="block";
             }
             else{

            // 성별 선택여부 확인
            if(gen==""){
                alert("성별을 선택해주세요.");
            }
            else{
                
                // 이메일에 @ 가안들어가면 형식 안맞는거로판단 , (선택)이기때문에 이메일을 입력햇을떄만 검사
                if(!email.indexOf("@") && email!=""){
                    alert("이메일의 형식이 아닙니다.")
                }
                else{
                    // 인증번호 일치여부 확인
                    if(num!=toc){
                        alert("인증번호가 일치하지 않습니다.");
                    }
                    // 앞의 모든조건 통과시 회원가입 완료판단 및 페이지 리로드
                    else{
                        alert("회원가입이 완료되었습니다");
                        location.reload();
                    }
                }
                
            }
        }
        }
    }
    
}
}