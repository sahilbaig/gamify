import express from 'express';
const app = express()
const PORT  = 3000
// xp =(level/x)^y  x=0.07 , y =2

app.get('/xp', (req, res)=>{

    // current_level = fetch xp from DB 
    // root(xp)*x

    const xp = 300;
    
    const playerInfo  =  {
        currentLevel : Math.ceil(Math.sqrt(xp)*0.07)  
      }
    return res.json(playerInfo)
    
})

app.listen(PORT , ()=>{
    console.log(`Listening to ${PORT}`)
})