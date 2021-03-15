import React from "react"
import {render} from "react-dom"
import { App } from './components/app/app.cpmponent'

const app = <App />
const here = document.querySelector("#here")

render (app, here)