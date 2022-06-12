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

export const calculateCalories = (type, weight, calories) => {
    if (type === 'byGrams') {
        return Math.round((weight / 100) * calories)
    } else { // === 'units'
        return Math.round(weight * calories)
    }
}

export const calculateWeight = (type, weight, item) => {
    if (type === 'byGrams') {
        return weight
    } else { // === 'units'
        return Math.round(weight * item)
    }
}

export const calculateGrams = (type, weight, item) => {
    if (type === 'byGrams') {
        return Math.round((weight / 100) * item)
    } else { // === 'units'
        return Math.round(weight * item)
    }
}