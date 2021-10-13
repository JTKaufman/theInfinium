

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
    'Threat',
    'Threat',
    'Threat',
    'Threat,Threat',
    'Failure,Threat'
]

const challengeDiceSides = [
    '',
    'Failure',
    'Failure',
    'Failure,Failure',
    'Failure,Failure',
    'Threat',
    'Threat',
    'Failure,Threat',
    'Failure,Threat',
    'Threat,Threat',
    'Threat,Threat',
    'Despair'
]

export const abilityRoll = (numberOfRolls: number) => {
    const rolls = []

    for (var i = 0; i < numberOfRolls; i++) {
        rolls.push(Math.floor(Math.random() * 8));
    }

    var rollResults = rolls.map(x => abilityDiceSides[x])
    const resultsString = rollResults.join(',')
    const abilityResults = resultsString.split(',')

    return abilityResults
}

export const proficiencyRoll = (numberOfRolls: number) => {
    const rolls = []

    for (var i = 0; i < numberOfRolls; i++) {
        rolls.push(Math.floor(Math.random() * 12));
    }

    var rollResults = rolls.map(x => proficiencyDiceSides[x])
    const resultsString = rollResults.join(',')
    const proficiencyResults = resultsString.split(',')

    return proficiencyResults
}

export const difficultyRoll = (numberOfRolls: number) => {
    const rolls = []

    for (var i = 0; i < numberOfRolls; i++) {
        rolls.push(Math.floor(Math.random() * 8));
    }

    var rollResults = rolls.map(x => difficultyDiceSides[x])
    const resultsString = rollResults.join(',')
    const difficultyResults = resultsString.split(',')

    return difficultyResults
}

export const challengeRoll = (numberOfRolls: number) => {
    const rolls = []

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