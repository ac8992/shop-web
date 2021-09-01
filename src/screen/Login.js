import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logUserIn } from "../apollo";
import FormError from "../components/auth/FormError";
import PageTitle from "../components/feed/PageTitle";

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

const Input = styled.input`
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

const LoginButton = styled.input`
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

const Notification = styled.div`
    color: #2ecc71;
`

const LOGIN_MUTATION = gql`
    mutation login($userId:String!, $password:String!) {
        login(userId:$userId, password:$password) {
            ok
            token
            error
        }
    }
`

function Login() {
    const history = useHistory()
    const location = useLocation();
    const {register,  handleSubmit, errors, formState, getValues, setError, clearErrors} = useForm({
        mode: "onChange",
    });

    const onCompleted = (data) => {
        const {login: {ok, error, token}} = data;
        if(!ok) {
            return setError("result", {
                message: error,
            })
        }
        if(token) {
            logUserIn(token);
            history.push('/');
        }
    }
    const [login, {loading}] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = (data) => {
        if(loading) {
            return;
        }
        const {userId, password} = getValues();
        login({
            variables: {userId, password},
        })
    }
    
    const clearLoginError = () => clearErrors("result");
    return (
        <LoginForm>
            <PageTitle title="로그인" />
            <LoginTitle className="LoginTitle">LOGIN</LoginTitle>
            <LoginText>회원 로그인</LoginText>
            <Notification>{location?.state?.message}</Notification>
            <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input ref={register({
                        required: "사용자 이름을 입력해주세요",
                        minLength: {
                            value:4,
                            message: "사용자 이름은 최소 4자 이상이여야 합니다"
                        },
                    })} onChange={clearLoginError} name="userId" type="text" placeholder="사용자 아이디" hasError={Boolean(errors?.userId?.message)}/>
                    <FormError message={errors?.userId?.message}/>
                    <Input ref={register({
                        required:"비밀번호를 입력해주세요",
                    })} onChange={clearLoginError}  name="password" type="password" placeholder="비밀번호" hasError={Boolean(errors?.password?.message)}/>
                    <FormError message={errors?.password?.message}/>
                <LoginButton type="submit" value={loading ? "진행 중입니다" : "로그인"} disabled={!formState.isValid || loading} />
                <FormError message={errors?.result?.message} />
            </form>
            <Find>
                <IdFind>아이디 찾기</IdFind>
                <IdFind>비밀번호 찾기</IdFind>
            </Find>
            <Link to="/join">
                <JoinButton>회원가입</JoinButton>
            </Link>
        </LoginForm>
    )
}


export default Login;