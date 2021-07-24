import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContent = styled.div`
    height: 245px;
    width: 100%;
    text-decoration: none;
`

const TopArea = styled.div`
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
`

const Topsub2 = styled.li`
    margin-right: 15px;
    display: inline-block;
    color: #222;
    font-size: 12px;
    font-weight: 900;
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

const CategoryArea = styled.div`
    height: 52px;
    border-top: 1px solid rgba(0,0,0,.09);
    border-bottom: 1px solid rgba(0,0,0,.09);
`

const CategoryAreaSub = styled.div`
    width: 65%;
    text-align: center;
    
    height: 100%;
    margin: 0 auto;
`

const CategoryInner = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
`

const CategoryAllMenu = styled.div`
    display: block;
    width: 50px;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    transition: background 0.15s 0.0s ease-in-out;
`

const CategorySub = styled.ul`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`

const CategorySubItem = styled.li`
    margin-right: 15px;
    /* display: inline-block; */
    color: #222;
    font-size: 12px;
    height: 100%;
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return (
        <HeaderContent>
            <TopArea>
                <TopAreaSub>
                    <TopinnerLeft>
                        <Topsub>CART</Topsub>
                        <Topsub>ORDER</Topsub>
                        <Topsub2>MYPAGE</Topsub2>
                        <Topsub2>BOOKMARK</Topsub2>
                    </TopinnerLeft>
                    <TopinnerRight>
                        <Topsub2>NOTICE</Topsub2>
                        <Topsub>LOGIN</Topsub>
                        <Topsub>JOIN US</Topsub>
                    </TopinnerRight>
                </TopAreaSub>
            </TopArea>
            <HeaderLogo>
                <Logo><a href="/" >Shop</a></Logo>
            </HeaderLogo>
            <CategoryArea>
                <CategoryAreaSub>
                    <CategoryInner>
                        <CategoryAllMenu>...</CategoryAllMenu>
                        <CategorySub>
                            <CategorySubItem>상의</CategorySubItem>
                            <CategorySubItem>하의</CategorySubItem>
                            <CategorySubItem>신발</CategorySubItem>
                            <CategorySubItem>아우터</CategorySubItem>
                            <CategorySubItem>악세사리</CategorySubItem>
                        </CategorySub>
                    </CategoryInner>
                </CategoryAreaSub>
            </CategoryArea>
        </HeaderContent>
    )
}

export default Header;