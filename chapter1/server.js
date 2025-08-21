const express = require('express')
const app = express()
const PORT = 2424

let data =  ["Dharanish"] 


app.use(express.json())

//type 1
app.get('/',(req,res) => {
    console.log("yoy i got the end point ",req.method)
    res.send('<h1>Welcome to dharanish coding </h1><a href="/dashboard">dashboard</a><script >console.log("js script log ")</script>')
    // res.sendStatus(201)
})
 
app.get('/dashboard',(req,res) => {

    console.log("wow i got to hit the dashboard")
    res.send(`<body>
        <h1>Dashboard</h1>
        <a href ="/"> home </a>
        </body>`)
})

//type 2

app.get('/api/data',(req,res)=>{
    console.log("The api point was here")
    res.send(data)
})

app.post('/api/data',(req,res)=>{
    const newEntry = req.body;
       console.log(newEntry)
       data.push(newEntry.name)
    res.sendStatus(201)
 
})

app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log("we deleted the element off thte end of the arrray ")
    res.sendStatus(203);
})


app.listen(PORT,() => console.log(`Server has started on:${PORT}`)) 