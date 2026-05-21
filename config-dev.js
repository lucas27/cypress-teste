// const { defineConfig } = require('cypress')
// const baseConfig = require('./cypress.config')
import { defineConfig } from 'cypress' 
import baseConfig from './cypress.config'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path: path.resolve(__dirname, './.env.dev')
})

const e2e = {
    baseUrl: process.env.BASE_URL,
    env: {
        username: process.env.USER,
        password: process.env.PASSWORD
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})