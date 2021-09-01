import { gql } from "@apollo/client";

export const ITEM_FRAGMENT = gql`
    fragment ItemFragemnt on Item {
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
            review
            createdAt
            updatedAt
        }
        totalPages
    }
`