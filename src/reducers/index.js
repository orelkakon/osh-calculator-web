const todayValues = []
export const myDayList = (state = todayValues, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_LIST":
            return [
                ...state,
                {
                    name: action.payload.name,
                    carbs: action.payload.carbs,
                    proteins: action.payload.proteins,
                    fats: action.payload.fats,
                    grams: action.payload.grams,
                    calories: action.payload.calories,
                }
            ]
        case "UPDATE_ITEM_ON_LIST":
            return state.map(item => item.name === action.payload.name ? {
                ...item, carbs: action.payload.carbs,
                proteins: action.payload.proteins,
                fats: action.payload.fats,
                grams: action.payload.grams,
                calories: action.payload.calories
            } : item)
        case "REMOVE_ITEM_FROM_LIST":
            return state.filter(item => item.name !== action.payload.name)
        default:
    }
};
