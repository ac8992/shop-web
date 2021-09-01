import { useReactiveVar } from "@apollo/client"
import styled from "styled-components"
import { isLoggedInVar, logUserOut } from "../../apollo"
import useUser from "../../hooks/useUser"

const TopMenu = styled.div`
    height: 43px;
    border-bottom: 1px solid #e8e8e8;
`

const TopAreaSub = styled.div`
    position: relative;
    width: 65%;
    border-bottom-color: rgba(0,0,0,.09);
    margin: 0 auto;
`

const TopinnerLeft = styled.ul`
    float: left;
    white-space: nowrap;

`

const TopinnerRight = styled.ul`
    float: right;
`

const Topsub = styled.li`
    margin-right: 15px;
    display: inline-block;
    color: #222;
    font-size: 12px;
    cursor: pointer;
`

const Profile = styled.li`
    margin-right: 15px;
    display: inline-block;
    color: #222;
    font-size: 12px;
`

const Topsub2 = styled.li`
    margin-right: 15px;
    display: inline-block;
    color: #222;
    font-size: 12px;
    font-weight: 900;
    cursor: pointer;
`

function TopArea() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const {data} = useUser();
    return (
        <TopMenu>
        <TopAreaSub>
            <TopinnerLeft>
                <Topsub>CART</Topsub>
                <Topsub>ORDER</Topsub>
                <Topsub2>MYPAGE</Topsub2>
                <Topsub2>BOOKMARK</Topsub2>
            </TopinnerLeft>
                    {isLoggedIn ? (
                        <TopinnerRight>
                            <Topsub2>NOTICE</Topsub2>
                            <Profile>{`${data?.me?.name}`}님 환영합니다</Profile>
                            <Topsub onClick={() => logUserOut()}>LOGOUT</Topsub>
                        </TopinnerRight>
                    ) : (
                    <TopinnerRight>
                        <Topsub2>NOTICE</Topsub2>
                        <Topsub><a href="/login">LOGIN</a></Topsub>
                        <Topsub><a href="/join">JOIN US</a></Topsub>
                    </TopinnerRight>
                    )}
        </TopAreaSub>
    </TopMenu>
    )
}

export default TopArea;