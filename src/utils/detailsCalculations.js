export const MALE = "זכר"

export const calculateBMI = (weight, height) => {
    if (checkParamsValitation([height, weight])) {
        return Math.round(weight / Math.pow(height, 2) * 10000)
    }
    else return "Error"
}

export const calculateBMR = (year, weight, height, gender) => {
    const age = calculateAge(year)
    if (checkParamsValitation([height, weight, age])) {
        if (gender === MALE) {
            const bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
            return Math.round(bmr * 100) / 100

        } else {
            const bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
            return Math.round(bmr * 100) / 100
        }
    }
    else return "Error";
}

export const calculateMassPercentage = (year, weight, height, gender) => {
    const bmi = calculateBMI(weight, height);
    const age = calculateAge(year)
    if (checkParamsValitation([height, weight, age])) {
        let result = (1.39 * bmi) + (0.16 * age) - 9
        if (gender === MALE) {
            result -= 10.34
        }
        return Math.round(result * 100) / 100
    } else return "Error"
}

const calculateAge = (year) => {
    return new Date().getFullYear() - year;
}

const checkParamsValitation = (params) => {
    for (const param of params) {
        if (param <= 0) {
            return false
        }
    }
    return true;
}