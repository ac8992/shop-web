import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import FormError from "../components/auth/FormError";
import PageTitle from "../components/feed/PageTitle";
import routes from "./routes";

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

const JoinButton = styled.input`
    margin-top: 20px;
    width: 45%;
    padding: 18px 16px;
    background-color: #2a2b2c;
    color: #fff;
    border : none;
    font-size: 15px;
    margin-right: 5%;
 `

const CancelButton = styled.button`
    width: 45%;
    padding: 18px 16px;
    border : none;
    background-color: #84868b;
    color: #fff;
    font-size: 15px;
    margin-left: 5%;
`
const JOIN_MUTATION = gql`
    mutation  join($name:String!,$userId:String!, $email:String!, $password: String!, $address:String!, $phone:String!) {
        join(name:$name, userId:$userId, email:$email, password:$password, address:$address, phone:$phone) {
            ok
            error
        }
    }
`

function Join() {
    const history = useHistory();
    const onCompleted = (data) => {
        const { userId, password } = getValues()
        const { join: { ok },
        } = data;
        if (!ok) {
            return;
        }
        history.push(routes.login, { message: "회원가입이 완료되었습니다! 로그인을 해주세요.", userId, password });
    }
    const { register, handleSubmit, formState, getValues, errors, clearErrors } = useForm(
        { mode: "onChange" }
    );

    const [join, {
        loading
    }
    ] = useMutation(JOIN_MUTATION, { onCompleted });
    const onSubmitValid = (data) => {
        if (loading) {
            return;
        }
        join({
            variables: {
                ...data
            }
        })
    }
    const clearLoginError = () => clearErrors("result");
    return (
        <LoginForm>
            <PageTitle title="회원가입" />
            <LoginTitle className="JoinTitle">JOIN</LoginTitle>
            <LoginText>회원가입</LoginText>
            <form onSubmit={handleSubmit(onSubmitValid)}>
                <Input ref={register({
                    required: "사용자 이름을 입력해주세요",
                    minLength: {
                        value: 4,
                        message: "사용자 이름은 최소 4자 이상이여야 합니다"
                    },
                })} onChange={clearLoginError} name="userId" type="text" placeholder="사용자 아이디" />
                <FormError message={errors?.userId?.message}/>
                <Input ref={register({
                    required: "비밀번호를 입력해주세요",
                })} onChange={clearLoginError} name="password" type="password" placeholder="비밀번호" />
                <Input ref={register({
                    required: "",
                })} onChange={clearLoginError} name="name" type="text" placeholder="사용자 이름" />
                <Input ref={register({
                    required: "",
                })} onChange={clearLoginError} name="email" type="text" placeholder="이메일 주소" />
                <Input ref={register({
                    required: "",
                })} onChange={clearLoginError} name="address" type="text" placeholder="주소" />
                <Input ref={register({
                    required: "",
                })} onChange={clearLoginError} name="phone" type="text" placeholder="휴대폰 번호" />
                <JoinButton type="submit" value={loading ? "진행 중입니다" : "회원가입"} disabled={!formState.isValid || loading} />
                <CancelButton>돌아가기</CancelButton>
            </form>
        </LoginForm>
    )
}


export default Join;