const app = require('./server/app')
const port = process.env.PORT || 4200

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})