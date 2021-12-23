const { execSync } = require('child_process')

module.exports = {
		npm: {
			get () {
				return execSync('npm config get registry').toString()
			},
			async set (value) {
				// return execSync(`npm config set registry ${ value }`).toString()
				 execSync(`echo npm ${value} is has been set`).stdio.on('data', data => {
					console.log('packageManage.js:11',data.toString())
				})
			}
		},
		pnpm: {
			get () {
				return execSync('pnpm config get registry').toString()
			},
			async set (value) {
				// return execSync(`pnpm config set registry ${ value }`).toString()
				 execSync(`echo pnpm ${value} is has been set`).stdio.on('data', data => {
					console.log('packageManage.js:22',data.toString())
				})
			}
		},
		yarn: {
			get () {
				return execSync('yarn config get registry').toString()
			},
			async set (value) {
				console.log('set yarn')
				// return execSync(`yarn config set registry ${ value }`).toString()
				 execSync(`echo yarn ${value} is has been set`).stdio.on('data', data => {
					console.log('packageManage.js:33',data.toString())
				})
			}
		}
	}

