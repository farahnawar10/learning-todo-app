const db = require('../db/database');

//create db
exports.createDB=(req,res)=>{
    let query ="CREATE DATABASE Todolist";
    db.query(query, (err, result) => {
        if (err) throw err;
        return res.status(201).json("DB created");
    })
}

exports.createTable=(req,res)=>{
    let query="CREATE TABLE todolist1(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY(id))";
    db.query(query,(err,result)=>{
        if (err)throw err;
        return res.status(201).json("Table created");
    })
}
// create todo
exports.createList=(req,res)=>{
    let query="INSERT INTO todolist1 SET?";
    const { firstName, lastName } = req.body;

    db.query(query, { firstName, lastName }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

//show todos
exports.showTodos=(req,res)=>{
    let query="SELECT * from todolist1";
    db.query(query,(err,result)=>{
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

//show single todo
exports.showSingleTodo=(req,res)=>{
    let query =`Select * from todolist1 where id =${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err) return res.json(err);
        if (result.length > 0) {
            return res.status(200).json(result[0]); // ✅ Return the first object
        } else {
            return res.status(404).json({ message: "Todo not found" });
        }
    })
}

//update todo
exports.updateTodo = (req, res) => {
    const { firstName, lastName } = req.body;
    //const id = req.params.id;

    const q = `UPDATE todolist1 SET ? WHERE id =${req.params.id}`;

    db.query(q, {firstName, lastName}, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(200).json({ message: "Todo updated successfully" });
    });
};

//DELETE SINGLE TODO
exports.deleteSingleTodo = (req, res) => {

    let query = `DELETE FROM todolist1  WHERE id=${req.params.id}`;

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json({ data: "todo deleted" });
    });
}

