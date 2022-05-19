export const getAmounts = (list) => {
    let carbs = 0
    let proteins = 0
    let fats = 0
    let calories = 0
    list.forEach(item => {
        carbs += item.carbs
        proteins += item.proteins
        fats += item.fats
        calories += item.calories
    })
    return [carbs, proteins, fats, calories]
}

export const getPercentage = (amounts) => {
    const carbsPer = (amounts[0] * 4 / amounts[3]) * 100
    const proteinsPer = (amounts[1] * 4 / amounts[3]) * 100
    const fatsPer = (amounts[2] * 9 / amounts[3]) * 100
    return [carbsPer, proteinsPer, fatsPer]
}