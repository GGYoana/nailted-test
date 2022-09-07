const express = require('express');
const router = express.Router();
const {getUsers, createUser, getUserById, listsUsers} = require("../controllers/usuarios");


router.get("/", getUsers);
router.get("/paginate", paginatedResults(), (req, res) => {
  let datos = res.paginatedResults;
  res.render("users/index",{
    titulo: "Listado de usuarios",
    data: JSON.stringify(datos),
    totalSinFiltro : datos.length,
    limite : req.query.limit,
    locationSearch : req.query
  });

});


router.get("/createUser",  (req, res) => {
  res.render("users/newuser",{
    titulo: "Crear usuario"
  })
});
router.get("/:id", getUserById);

router.post("/", createUser);



function paginatedResults(){
  return async (req, res, next) => {
    const model = await listsUsers();
    console.log(req.query)
    let informacion = model;
    if(req.query.search){
      const filtro = req.query.search.toUpperCase(); 
      console.log("Filtra por email: " + filtro);
      
       informacion = [...informacion.map(x => x.email.toUpperCase().indexOf(filtro) >= 0 ? x : false).filter(Boolean)];              
    }
    else if (req.query.birthdateD){
      const birthdateD = new Date(req.query.birthdateD);
      console.log("Filtra por fecha desde: " + birthdateD);
      informacion = [...informacion.map(x => new Date(x.birthdate) > birthdateD ? x : false).filter(Boolean)];
    }
    else if (req.query.birthdateH){
      const birthdateH = new Date(req.query.birthdateH);
      console.log("Filtra por fecha hasta: " + birthdateH);
      informacion = [...informacion.map(x => new Date(x.birthdate) < birthdateH ? x : false).filter(Boolean)];    
      
    }else{
      informacion = informacion;
    }
      
    //if Order
    if(req.query.order !=""){
      const order = req.query.order;
      switch (order) {
        case 'nameAsc':
          console.log("Ordenado por nombre Ascendente");

          informacion.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
          break;
        case 'nameDesc':
          console.log("Ordenado por nombre Descendente");
          informacion.sort(function(a, b) {
              var textA = a.name.toUpperCase();
              var textB = b.name.toUpperCase();
              return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
          });
          break;
        case 'apeAsc':
          console.log("Ordenado por apellido Ascendente");
          informacion.sort(function(a, b) {
            var textA = a.surname.toUpperCase();
            var textB = b.surname.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
          break;
        case 'apeDesc':
          console.log("Ordenado por apellido Descendente");
          informacion.sort(function(a, b) {
              var textA = a.surname.toUpperCase();
              var textB = b.surname.toUpperCase();
              return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
          });
          break;        
        default:
          console.log("Ordenacion Básica");
          informacion.sort(function(a, b) {
              var textA = a.name.toUpperCase();
              var textB = b.name.toUpperCase();
              return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
      }
    }

    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    if(!req.query.page && !req.query.limit){ 
      page = 1; limit = 20; 
    }
    
 
    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
 
    const results = {};
    if (endIndex < informacion.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
 
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
 
    results.results = informacion.slice(startIndex, endIndex);
 
    res.paginatedResults = results;
    next();
  };
}

module.exports = router;
