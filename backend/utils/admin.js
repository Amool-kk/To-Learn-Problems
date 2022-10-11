const { DB_URI } = require('../config')
const { Admin } = require('../models')
const mongo = require('./mongo')
const inquirer = require('inquirer')
const mailer = require('./mailer')

    ; (async () => {
        await mongo.connectDB(DB_URI)

        const prompt = inquirer.createPromptModule()

        let user = await prompt([
            {
                name: 'email',
                type: 'input',
                message: 'Email: '
            },
            {
                name: 'password',
                type: 'password',
                mask: true,
                message: 'Password: '
            },

        ])

        let adminUser = new Admin(user)

        adminUser.save(async (err) => {
            if (err) throw err
            console.log(`Admin with email ${user.email} created successfuly`)
            await mailer.sendMail(user.email, 'Welcome to Codefox', 'You have been added as an admin')
            process.exit(0)

        })
    })()
