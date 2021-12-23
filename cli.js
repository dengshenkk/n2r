#!/usr/bin/env node


var inquirer = require('inquirer')
const { Command } = require('commander')
const program = new Command()
const resisters = require('./registries.json')
const { setCurrentRegistry, getCurrentRegistry } = require('./main.js')

program
	.version('0.0.1')


program
	.command('ls')
	.description('registry list')
	.action((env, options) => {
		env = env || 'all'
		console.log('ls')
		inquirer.prompt([
			/* Pass your questions in here */
			{
				type: 'list',
				name: 'input',
				message: 'select one',
				default: 'npm',
				choices: [
					...resisters
				]
			}
		]).then(async (answers) => {
				// Use user feedback for... whatever!!
				// console.log('answers :', answers)
				// console.log(await getCurrentRegistry())
				await setCurrentRegistry(answers.input)
			})
			.catch((error) => {
				if (error.isTtyError) {
					// Prompt couldn't be rendered in the current environment
				} else {
					// Something else went wrong
				}
			})
		
	})

program.parse(process.argv)




