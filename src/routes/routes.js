/*Obtengo los modulos mas generales en todo el sistema*/
	const path = require("path");
	const native_module = require(path.join(path.resolve('src/modules_native'),'native_module.js'));
/**/

/*Obtengo los elementos html genericos*/
	//const header = include(path.join(path.resolve('src/views'),'partials/fotter'));
//	console.log(header)
/**/

/*asigno*/
	const {express} = native_module;
/**/

/*manejo lo requerido*/
	const router = express.Router();
/**/

///rutas
router.get('/',(req,res)=>{
	res.render('dashboard',{'e':1});
});


router.get('/covid_info',(req,res)=>{
	res.render('contact/covid_info',{'e':1});
});


module.exports = router;