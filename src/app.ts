import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app:Application = express()

app.use(cors())
app.use(express.json())


app.get('/', (req: Request, res: Response)=>{
    res.send('Your mongoose server is running bro')
})

app.use((req:Request, res: Response)=>{
    res.status(404).json({
        success: false,
        message: 'Api not found'
    })
})

export default app