const {Pool} = require("pg");
const pool = new Pool ({
    host: process.env.HOSTBDD,
    user: process.env.USERBDD,
    password : process.env.PASSBDD,
    database: process.env.BDD,
    port: process.env.PORTBDD
});

const getUsers = async (req,res) =>{
    const response = await pool.query("SELECT * FROM users");
    let datos = response.rows;
    const objeto = {
        titulo: "Listado de usuarios",
        data: JSON.stringify(datos),
        totalSinFiltro : datos.length,
        limite : req.query.limit,
        locationSearch : req.query
    };
    res.render("users/index",objeto);
};

const createUser = async (req, res) =>{
    
    const {name, surname, address, phone, email, birthdate} = req.body // destructuring
    const qury = "INSERT INTO users (name, surname, address, phone, email, birthdate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
    const response = await pool.query(qury, [name, surname, address, phone, email, birthdate]);
    const datos = [{id : response.rows[0].id, name, surname, address, phone, email, birthdate}];
    const query = {order:"",search:name}
    const objeto = {
        titulo: "Listado de usuarios", 
        data: JSON.stringify(datos),
        totalSinFiltro : datos.length,
        limite : 1,
        locationSearch : query
    };
    console.log(objeto)
    res.render("users/index",objeto)
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    console.log(response.rows)
    res.render("users/details",{
        titulo: "Detalles usuario",
        data: response.rows[0]
      })
}

const listsUsers = async () =>{
    const response = await pool.query("SELECT * FROM users");
    return response.rows; 
};
  
module.exports = {
    getUsers,
    createUser,
    getUserById,
    listsUsers
}