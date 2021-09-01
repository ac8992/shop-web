import styled from "styled-components";
import Category from "./auth/Catergory";
import TopArea from "./auth/TopArea";

const HeaderContent = styled.div`
    height: 245px;
    width: 100%;
    text-decoration: none;
`



const HeaderLogo = styled.div`
    display: table;
    margin-left: auto;
    margin-right: auto;
    height: 60%;
    text-decoration: none;
`

const Logo = styled.span`
    display: block;
    font-size: 38px;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
`



function Header() {
    return (
        <HeaderContent>
            <TopArea />
            <HeaderLogo>
                <Logo><a href="/" >Shu</a></Logo>
            </HeaderLogo>
            <Category />
        </HeaderContent>
    )
}

export default Header;