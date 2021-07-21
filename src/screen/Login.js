import styled from "styled-components";

const LoginForm = styled.div`
    width : 430px;
    height: 630px;
    text-align: center;
    margin: 0 auto;
    padding : 40px 40px 50px;
`

const LoginTitle = styled.h3`
font-size: 29px;
    font-weight: normal;
`

const LoginText = styled.span`
    display: block;
    line-height: 50px;
    border-bottom: 2px solid #000000;
    font-weight: bold;
`

const IdInput = styled.input`
    width: 98%;
    height: 60px;
    padding: 2px 2px 2px 7px;
    color: #222;
    border: none;
    border-bottom : 1px solid #e2e2e2;
    line-height: 20px;
    font-size: 12px;
    outline: none;
`

 const LoginButton = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 18px 16px;
    background-color: #2a2b2c;
    color: #fff;
    border : none;
    font-size: 15px;
 ` 

 const Find = styled.ul`
    margin : 0px;
    margin-top: 12px;
    border-top: 1px solid #e7e7e7;
    padding : 0px;
 `

const IdFind = styled.li`
    display: inline-block;
    width: 50%;
    position: relative;
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    vertical-align: middle;
`

const JoinButton = styled.button`
    width: 100%;
    padding: 18px 16px;
    border : none;
    background-color: #84868b;
    color: #fff;
    font-size: 15px;
`

function Login() {
    return (
        <div>
            <LoginForm>
                <LoginTitle className="LoginTitle">LOGIN</LoginTitle>
                <LoginText>회원 로그인</LoginText>
                <IdInput placeholder="아이디" />
                <IdInput placeholder="비밀번호" />
                <LoginButton>로그인</LoginButton>
                <Find>
                    <IdFind>아이디 찾기</IdFind>
                    <IdFind>비밀번호 찾기</IdFind>
                </Find>
                <JoinButton>회원가입</JoinButton>
            </LoginForm>
        </div>
    )
}

export default Login;