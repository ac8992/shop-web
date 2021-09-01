import { gql, useQuery } from "@apollo/client";
import Item from "../components/feed/Item";
import PageTitle from "../components/feed/PageTitle";

// export const ITEM_QUERY = gql`
//     query seeItem {
//         seeItem {
//             items,
//             totalPages
//         } 
//     }
// `

function Home() {
    // const { data } = useQuery(ITEM_QUERY);
    return (
        <div>
            <PageTitle title="메인" />

        </div>
    )
}


export default Home;