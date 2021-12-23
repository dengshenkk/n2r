

const packageManage = require('./packageManage.js')

module.exports = {
	async getCurrentRegistry(){
		let result = []
		for (const packageManageKey in packageManage) {
			result.push(
				`${packageManageKey} : `+ packageManage[packageManageKey].get()
			)
		}
		return result
	},
	 async setCurrentRegistry(value) {
		 console.log('packageManage :', packageManage)
		for (const packageManageKey in packageManage) {
			console.log('packageManageKey :', packageManageKey)
			console.log('packageManage[packageManageKey] :', packageManage[packageManageKey])
				 await packageManage[packageManageKey].set(value)
		}
	}
}
