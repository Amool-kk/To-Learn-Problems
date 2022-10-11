const { DB_URI } = require('../config')
const { Admin } = require('../models')
const mongo = require('./mongo')
const inquirer = require('inquirer')

    ; (async () => {
        await mongo.connectDB(DB_URI)

        const prompt = inquirer.createPromptModule()

        let user = await prompt([
            {
                name: 'username',
                type: 'input',
                message: 'Username: '
            },
            {
                name: 'password',
                type: 'password',
                mask: true,
                message: 'Password: '
            },

        ])

        let adminUser = new Admin(user)

        adminUser.save((err) => {
            if (err) throw err
            console.log(`Admin ${user.username} created successfuly`)
            process.exit(0)

        })
    })()
