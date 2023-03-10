let num= parseInt(Math.random()*10000)
function blurIt(num){
    var i;
    
    var danger = document.getElementsByClassName("dan");
    var ival = event.currentTarget.value;
    
    if(ival==''){
   document.getElementById(num).style.display= "block"; 
    }
    else{
        document.getElementById(num).style.display= "none"; 
    }
    
}

function rannum(){
    console.log(num);
}
function inputChk(){
    const idreg= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_!-])[A-Za-z\d_!-]{8,}$/;
    const pwreg= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_!-])[A-Za-z\d_!-]{8,}$/;
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    let pwchk = document.getElementById("pwchk").value;
    let name = document.getElementById("name");
    let year = document.getElementById("year");
    let month = document.getElementById("mon");
    let email = document.getElementById("email").value;
    let gen = document.getElementById("gender").value;
    let nat = document.getElementById("lo").value;
    let toc = document.getElementById("tochk").value;
    if(!idreg.test(id)){
        document.getElementById("fir").innerText="아이디는 영소대문자1개이상,숫자1개이상, _ , - , !1개이상(8글자이상)으로 생성하여주세요";
        document.getElementById("fir").style.display="block";
    }else{
        if(!pwreg.test(pw)){
            document.getElementById("sec").innerText="비밀번호는 영소대문자1개이상,숫자1개이상, _ , - , !1개이상(8글자이상)으로 생성하여주세요";
            document.getElementById("sec").style.display="block";
        }else{
        if(pw!=pwchk){
            document.getElementById("thi").innerText="비밀번호가 일치하지 않습니다.";
            document.getElementById("thi").style.display="block";
        }
        else{
            if(gen==""){
                alert("성별을 선택해주세요.");
            }
            else{
                if(!email.indexOf("@") || email!=""){
                    alert("이메일의 형식이 아닙니다.")
                }
                else{
                    if(num!=toc){
                        alert("인증번호가 일치하지 않습니다.");
                    }
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