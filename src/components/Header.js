import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContent = styled.div`
    height: 245px;
    width: 1100px;
`

const TopArea = styled.div`
    padding: 0 10px;
    height: 42px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    min-width: 1100px;
    border-bottom : 1px solid #e2e2e2;
    margin: 0 auto;
    display: table-cell;
    vertical-align: middle;
`

const Topul = styled.ul`
    float: left;
`

const Topsub = styled.li`
    margin-right: 15px;
    display: inline-block;
    color: #222;
    font-size: 12px;
`
const HeaderLogo = styled.div`
    display: table;
    margin-left: auto;
    margin-right: auto;
    height: 60%;
`

const Logo = styled.span`
    display: block;
    font-size: 38px;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
    text-decoration-line: none;
`

const Category = styled.div`
    height: 52px;
    width: 100%;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,.09);
    border-bottom: 1px solid rgba(0,0,0,.09);
`

function Header() {
    return (
        <HeaderContent>
            <TopArea>
                <Topul>
                    <Topsub>LOGIN</Topsub>
                    <Topsub>JOIN US</Topsub>
                    <Topsub>CART</Topsub>
                    <Topsub>ORDER</Topsub>
                    <Topsub>MY PAGE</Topsub>
                    <Topsub>BOOKMARK</Topsub>
                    <Topsub>Notice</Topsub>
                </Topul>
            </TopArea>
            <Link to={"/"}>
                <HeaderLogo>
                    <Logo>Shop</Logo>
                </HeaderLogo>
            </Link>
            <Category>

            </Category>
        </HeaderContent>
    )
}

export default Header;