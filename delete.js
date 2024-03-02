

app.delete('/api/delete/:id',(req,res) =>{
    const {id} = req.params;
    const sql= 'DELETE FROM users WHERE id=?';
    db.query(sql, [id], (err, result) =>{
        if(err){
            throw err;
        }
        res.send('User deleted successfully');
    });
});