const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("wow I am excited too")
});
 
const users = [
    {id:0, name:'Sourav', email: "ahcan720@gmail.com"},
    {id:1, name:'Musa',email: "munna720@gmail.com"},
    {id:2, name:'Hasan', email: "hasan720@gmail.com"},
    {id:3, name:'Jos', email: "Jony720@gmail.com"}
]
app.get('/users', (req, res) => {
    //use search query
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli')
})
app.listen(port, () => {
    console.log(('listening to port', port));
})