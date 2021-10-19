import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, ImageBackground, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Text} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { abilityRoll, challengeRoll, difficultyRoll, proficiencyRoll } from '../Utils/Utils';

const BackgroundImage = { uri: 'https://external-preview.redd.it/LRzHKjo2EArpIFgdaf0K7kUXk56KEnPDtTD4qhuZAho.png?format=pjpg&auto=webp&s=f8ab7c3851d8d5402ce99da5226cab834fd559ca'};


export default function diceRollScreen({ navigation }: RootTabScreenProps<'DiceRoller'>) {
  const [abilityScore, setAbilityScore] = useState('1');
  const [proficiencyScore, setProficiencyScore] = useState('0');
  const [difficultyScore, setDifficultyScore] = useState('1');
  const [challengeScore, setChallengeScore] = useState('0');
  const [successFailure, setSuccessFailure] = useState(0);
  const [advantageDisadvantage, setAdvantageDisadvantage] = useState(0);
  const [triumphDespair, setTriumphDespair] = useState(0);

  //@ts-ignore
  const rollResultTotals = (rollResults) => {
    //@ts-ignore
    rollResults.forEach(n => {
      switch(n) {
        case 'Success':
          setSuccessFailure(successFailure + 1)
          break;
        case 'Failure':
          setSuccessFailure(successFailure - 1)
          break;
        case 'Advantage':
          setAdvantageDisadvantage(advantageDisadvantage + 1)
          break;
        case 'Disadvantage':
          setAdvantageDisadvantage(advantageDisadvantage - 1)
          break;
        case 'Triumph':
          setTriumphDespair(triumphDespair + 1)
          break;
        case 'Despair':
          setTriumphDespair(triumphDespair - 1)
          break;
      }
    }) 
  }

  /**
   * Calls the functions from Utils and make the rolls and get the result totals
   * @param - uses the scores to determine the number of rolls
   */
  function getDiceRollResults() {
    clearPreviousResults()
    const abilityRolls = Number(abilityScore) - Number(proficiencyScore)
    const difficultyRolls = Number(difficultyScore) - Number(challengeScore)

    rollResultTotals(abilityRoll(abilityRolls))
    rollResultTotals(proficiencyRoll(Number(proficiencyScore)))
    rollResultTotals(difficultyRoll(difficultyRolls))
    rollResultTotals(challengeRoll(Number(challengeScore)))
    
  }

  function clearPreviousResults() {
    setSuccessFailure(0)
    setAdvantageDisadvantage(0)
    setTriumphDespair(0)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container} >
        <ImageBackground source={BackgroundImage} style={styles.image}>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Ability Score</Text>
            <TextInput style={styles.diceInput} keyboardType='numeric' defaultValue={abilityScore} />
          </View>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Proficiency Score</Text>
            <TextInput style={styles.diceInput} keyboardType='numeric' defaultValue={abilityScore} />
          </View>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Difficulty Rating</Text>
            <TextInput style={styles.diceInput} keyboardType='numeric' defaultValue={abilityScore} />
          </View>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Challenge Rating</Text>
            <TextInput style={styles.diceInput} keyboardType='numeric' defaultValue={abilityScore} />
          </View>
          <View style={styles.results}>
            <Text style={styles.resultText}>
              {successFailure < 0 ? `${Math.abs(successFailure)} Failure` : `${successFailure} Success`}
            </Text>
            <Text style={styles.resultText}>
              {advantageDisadvantage < 0 ? `${Math.abs(advantageDisadvantage)} Disadvantage` : `${advantageDisadvantage} Advantage`}
            </Text>
            <Text style={styles.resultText}>
              {triumphDespair < 0 ? `${Math.abs(triumphDespair)} Despair` : `${triumphDespair} Triumph`}
            </Text>
          </View>
          <TouchableOpacity onPress={() => getDiceRollResults()}>
            <Text style={styles.title}>
              Roll
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //ToDo: Should change this to a style helper
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'yellow',
    marginBottom: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
    width: '100%',
  },
  diceInput: {
    height: 50, 
    width: 100, 
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white'
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 20,
    color: 'yellow'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },
  results: {
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
    margin: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'yellow',
    margin: 10,
    flexWrap: 'wrap'
  }
});
