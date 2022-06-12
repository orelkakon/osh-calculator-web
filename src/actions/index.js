export const actionAddItem = (name, carbs, proteins, fats, grams, calories, type, kind) => {
    return ({
        type: "ADD_ITEM_TO_LIST",
        payload: {
            name,
            carbs,
            proteins,
            fats,
            grams,
            calories,
            type,
            kind
        }
    })
}

export const actionUpdateItem = (name, carbs, proteins, fats, grams, calories, type, kind) => {
    return ({
        type: "UPDATE_ITEM_ON_LIST",
        payload: {
            name,
            carbs,
            proteins,
            fats,
            grams,
            calories,
            type,
            kind
        }
    })
}

export const actionRemoveItem = (name) => {
    return ({
        type: "REMOVE_ITEM_FROM_LIST",
        payload: {
            name
        }
    })
}