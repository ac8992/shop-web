import styled from "styled-components"

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

const CategorySub = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
`

const CategorySubItem = styled.div`
    font-size: 12px;
    flex-grow: 1;
     padding : 20px 0px 0px 0px; 
`


function Category() {
    return (
        <CategoryArea>
            <CategoryAreaSub>
                <CategoryInner>
                    <CategorySub>
                        <CategorySubItem>전체상품</CategorySubItem>
                        <CategorySubItem>베스트</CategorySubItem>
                        <CategorySubItem>상의</CategorySubItem>
                        <CategorySubItem>하의</CategorySubItem>
                        <CategorySubItem>신발</CategorySubItem>
                        <CategorySubItem>아우터</CategorySubItem>
                        <CategorySubItem>악세사리</CategorySubItem>
                        <CategorySubItem>기타</CategorySubItem>
                    </CategorySub>
                </CategoryInner>
            </CategoryAreaSub>
        </CategoryArea>
    )
}

export default Category;