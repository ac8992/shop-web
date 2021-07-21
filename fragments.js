import {gql} from "@apollo/client";

export const ITEM_PRAGMENT = gql `
    fragment ItemFragment on Item {
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
`