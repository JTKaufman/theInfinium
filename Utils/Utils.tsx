

const abilityDiceSides = [
    '',
    'Success',
    'Success',
    'Success,Success',
    'Advantage',
    'Advantage',
    'Success,Advantage',
    'Advantage,Advantage'
]

const proficiencyDiceSides = [
    '',
    'Success',
    'Success',
    'Success,Success',
    'Success,Success',
    'Advantage',
    'Success,Advantage',
    'Success,Advantage',
    'Success,Advantage',
    'Advantage,Advantage',
    'Advantage,Advantage',
    'Triumph'
]

const difficultyDiceSides = [
    '',
    'Failure',
    'Failure, Failure',
    'Disadvantage',
    'Disadvantage',
    'Disadvantage',
    'Disadvantage,Disadvantage',
    'Failure,Disadvantage'
]

const challengeDiceSides = [
    '',
    'Failure',
    'Failure',
    'Failure,Failure',
    'Failure,Failure',
    'Disadvantage',
    'Disadvantage',
    'Failure,Disadvantage',
    'Failure,Disadvantage',
    'Disadvantage,Disadvantage',
    'Disadvantage,Disadvantage',
    'Despair'
]

export const abilityRoll = (numberOfRolls: number) => {
    var rolls = Array.from({length: numberOfRolls}, () => Math.floor(Math.random() * 8))

    // for (var i = 0; i < numberOfRolls; i++) {
    //     rolls[i].push((Math.floor(Math.random() * 8)))
    // }

    console.log(rolls)
    var rollResults = rolls.map(x => abilityDiceSides[x])
    const resultsString = rollResults.join(',')
    const abilityResults = resultsString.split(',')

    console.log(abilityResults)
    return abilityResults
}

export const proficiencyRoll = (numberOfRolls: number) => {
    const rolls = Array(numberOfRolls)

    for (var i = 0; i < numberOfRolls; i++) {
        rolls[i] = (Math.floor(Math.random() * 12));
    }

    var rollResults = rolls.map(x => proficiencyDiceSides[x])
    const resultsString = rollResults.join(',')
    const proficiencyResults = resultsString.split(',')

    return proficiencyResults
}

export const difficultyRoll = (numberOfRolls: number) => {
    const rolls = Array(numberOfRolls)

    for (var i = 0; i < numberOfRolls; i++) {
        rolls.push(Math.floor(Math.random() * 8));
    }

    var rollResults = rolls.map(x => difficultyDiceSides[x])
    const resultsString = rollResults.join(',')
    const difficultyResults = resultsString.split(',')

    return difficultyResults
}

export const challengeRoll = (numberOfRolls: number) => {
    const rolls = Array(numberOfRolls)

    for (var i = 0; i < numberOfRolls; i++) {
        rolls.push(Math.floor(Math.random() * 12));
    }

    var rollResults = rolls.map(x => challengeDiceSides[x])
    const resultsString = rollResults.join(',')
    const challengeResults = resultsString.split(',')

    return challengeResults
}

const rollResultTotals = () => {
    
}