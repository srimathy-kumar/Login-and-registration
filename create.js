app.post('/api/create', (req,res) =>{
    const {username, email, password, cpassword} = req.body;
    const sql = 'CREATE TABLE users(username VARCHAR(50), email VARCHAR(100), password VARCHAR(100), cpassword password VARCHAR(100))';
    db.query(sql,[username, email, password, cpassword], (err,result) =>{
        if(err){
            throw err;
        }
        res.send('Table created successfully');
    });
});




