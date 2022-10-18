const path = require("path")
const express = require("express")

const app = express()

// Define paths for Express config
const viewsPath = path.join(__dirname, './view')
const staticAssestsPath = path.join(__dirname, "./public")
app.use(express.static(staticAssestsPath))


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/first', (req, res) => {
    res.render('first',{
        name: 'Tarun'
    })
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000")
})
