// index.ts
import * as readline from 'readline'
import { PokemonTeam } from './PokemonTeam'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Helper function to prompt the user and await input
function prompt (question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, resolve)
  })
}

// Display the main menu in English
function showMainMenu (): void {
  console.log('=============================')
  console.log('POKÉMON TRAINING SYSTEM')
  console.log('=============================')
  console.log('1. Register a Pokémon')
  console.log('2. Train a Pokémon')
  console.log('3. Show Pokémon team')
  console.log('4. Show the strongest Pokémon')
  console.log('5. Exit')
  console.log('=============================')
}

// Map a numeric option to a Pokémon type
function getPokemonType (option: number): string {
  switch (option) {
    case 1:
      return 'Fire'
    case 2:
      return 'Water'
    case 3:
      return 'Grass'
    case 4:
      return 'Electric'
    default:
      return ''
  }
}

// Map a numeric option to a training type
function getTrainingType (option: number): string {
  switch (option) {
    case 1:
      return 'Gym Battle'
    case 2:
      return 'Trainer Battle'
    case 3:
      return 'Skill Practice'
    default:
      return ''
  }
}

async function main () {
  const pokemonTeam = new PokemonTeam()
  let menuOption: number = 0

  do {
    showMainMenu()
    const input = await prompt('Select an option: ')
    menuOption = parseInt(input)

    if (isNaN(menuOption)) {
      console.log('Invalid input. Please try again.\n')
      continue
    }

    switch (menuOption) {
      case 1: {
        // Register a Pokémon
        const name = await prompt('Enter the name of the Pokémon: ')
        const idInput = await prompt('Enter the 6-digit ID: ')
        const id = parseInt(idInput)

        console.log('Select the Pokémon type:')
        console.log('1. Fire')
        console.log('2. Water')
        console.log('3. Grass')
        console.log('4. Electric')
        const typeInput = await prompt('Option: ')
        const typeOption = parseInt(typeInput)
        const pokemonType = getPokemonType(typeOption)

        if (!pokemonType) {
          console.log('Invalid Pokémon type.\n')
          break
        }

        const powerInput = await prompt(
          'Enter the initial power level (1-100): '
        )
        const powerLevel = parseInt(powerInput)

        try {
          const result = pokemonTeam.registerPokemon(
            id,
            name,
            pokemonType,
            powerLevel
          )
          if (result.success) {
            console.log('Pokémon registered successfully.\n')
          } else {
            console.log(`Registration failed: ${result.message}\n`)
          }
        } catch (error: any) {
          console.log(`Error: ${error.message}\n`)
        }
        break
      }
      case 2: {
        // Train a Pokémon
        const idInput = await prompt('Enter the Pokémon ID: ')
        const id = parseInt(idInput)

        console.log('Select the training type:')
        console.log('1. Gym Battle')
        console.log('2. Trainer Battle')
        console.log('3. Skill Practice')
        const trainingTypeInput = await prompt('Option: ')
        const trainingOption = parseInt(trainingTypeInput)
        const trainingType = getTrainingType(trainingOption)

        if (!trainingType) {
          console.log('Invalid training type.\n')
          break
        }

        const difficultyInput = await prompt(
          'Enter the training difficulty (1-100): '
        )
        const difficulty = parseInt(difficultyInput)

        try {
          pokemonTeam.pokemonTraining(id, trainingType, difficulty)
          console.log('Training complete.\n')
        } catch (error: any) {
          console.log(`Training failed: ${error.message}\n`)
        }
        break
      }
      case 3: {
        // Show the Pokémon team
        pokemonTeam.showTeam()
        break
      }
      case 4: {
        // Show the strongest Pokémon
        pokemonTeam.getStrongestPokemon()
        break
      }
      case 5: {
        console.log('Exiting the program...')
        break
      }
      default: {
        console.log('Invalid option. Please try again.\n')
        break
      }
    }
  } while (menuOption !== 5)

  rl.close()
}

main()
