export const actionAddItem = (name, carbs, proteins, fats, grams, calories) => {
    return ({
        type: "ADD_ITEM_TO_LIST",
        payload: {
            name,
            carbs,
            proteins,
            fats,
            grams,
            calories
        }
    })
}

export const actionUpdateItem = (name, carbs, proteins, fats, grams, calories) => {
    return ({
        type: "UPDATE_ITEM_ON_LIST",
        payload: {
            name,
            carbs,
            proteins,
            fats,
            grams,
            calories
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