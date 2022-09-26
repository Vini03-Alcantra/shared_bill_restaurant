import {app} from "./app"

const PORT = process.env.PORT || 3025

app.listen(PORT, () => {
    console.log(`Rodando na PORTA ${PORT}`)
})