import styled from "styled-components";

const ItemLine = styled.li`
    width: 24%;
    display: inline-block;
    margin-right: 1%;
    margin-bottom: 20px;
    color: #888;
    vertical-align: top;
    text-align: center;
`
const ItemBox = styled.div`
position: relative;
    font-size: 12px;
    line-height: 1.7;
    vertical-align: top;
`

const Thum = styled.img`
    width: 100%;
    height: 300px;
`

const ItemExplan = styled.div`
width:100%;
    height: 211px;
    text-align: left;
    margin: 0px 5px 0px 5px;
`

const ItemName = styled.div`
    width : 100%;
    font-size: 13px;
    line-height: 1.7;
    text-align: left;
    margin: 5px 0px 5px 0px;
    color:#000;
    border-bottom: 1px solid #e8e8e8;
    font-weight: 600;
`

const ItemPrice = styled.div`
    font-size: 13px;
    color: #222222;
    text-align: left;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`

const ItemColor = styled.div`
    float: left;
    width: 50%;
    text-align: left;
`

const ItemSize = styled.div`
    float: right;
    width: 50%;
    text-align: right;
`

function Item({itemName, price, color, size, category, thum, photo, review}) {
    return (
            <ItemLine>
                <ItemBox>
                    <Thum src={thum}></Thum>
                    <ItemExplan>
                        <ItemColor>{color}</ItemColor>
                        <ItemSize>{size}</ItemSize>
                        <ItemName>{itemName}</ItemName>
                        <ItemPrice>KRW {price}원</ItemPrice>
                        배송비 : 무료
                    </ItemExplan>
                </ItemBox>
            </ItemLine>
    )
}

export default Item;


