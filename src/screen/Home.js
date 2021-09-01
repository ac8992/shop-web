import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Item from "../components/feed/Item";
import PageTitle from "../components/feed/PageTitle";
//import { ITEM_FRAGMENT } from "../fragment";

const SEEITEM_QUERY = gql`
    query seeItem {
        seeItem{
         ok
         totalPages
         items {
           id
         itemCode
         itemName
         price
         color
         size
         category
         thum
         photo
         }
         error
       }
     }
`

const Main = styled.div`
        position: relative;
    width: 65%;

    border-bottom-color: rgba(0,0,0,.09);
    margin: 0 auto;
`
function Home() {
    const {data} = useQuery(SEEITEM_QUERY);
    return (
        <Main>
            <PageTitle title="메인" />
            {data?.seeItem.items?.map(item => <Item key={item.id} {...item} />)}
        </Main>
    )
}


export default Home;