/*Obtengo los modulos mas generales en todo el sistema*/
const path = require("path");
const native_module  = require(path.join(__dirname,'modules_native/native_module.js'))
const router_module  = require(path.join(__dirname,'routes/routes.js'))
/**/

/*asigno*/
const {express,engine} = native_module;
/**/

/*manejo lo requerido*/
	const app = express();
/**/

/*Obtengo lo necesario solo para este modulo*/
	const route =  require(path.join(__dirname,'routes/routes.js'))
/**/


/*config app*/
	app.set('views',path.resolve('src/views')); /*Configuro vistas*/
	app.engine('html', engine(
		{
			layoutsDir    : path.join(path.resolve('src/views'),'partials'),
			defaultLayout : 'body_render',
			extname       : '.html',
			helpers       :  require(path.join(__dirname,'public/helpers/helper_engine/helpers.js')),
    
		}
	)); /*Configuro partes genericas*/
	app.set('view engine', 'html');
/**/

/*Init routes*/
	app.use(route);
/**/

//Config para casos especificos
	///Puertos
	app.set('port_prod',4000);
	
	/*archivos estatico*/

	/*obtenemos el listado de archivos estaticos*/
	//const list_statis   = require(path.join(__dirname,'static_folder/list_static.js'))

	/*añadimos cada archivo de manera dinamica*/
//	const render_static =  require(path.join(__dirname,'static_folder/render_static.js'))

	/*realizamos el render al app*/
		//new render_static(list_statis,app).render_list();
	/**/
	
	//public 
	app.use('/css', express.static(path.join(path.resolve('src/public'),'css')));
	app.use('/img', express.static(path.join(path.resolve('src/public'),'images')));

	///style 
	app.use('/css', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/animate.css/')
		)
	);

	app.use('/css', express.static(
			path.resolve(
				path.dirname(__dirname) + '/node_modules/bootstrap/dist/css'
			)
		)
	);

	/*js*/
	app.use('/js', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/jquery/dist')
		)
	);
	app.use('/js', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/popper.js/dist')
		)
	);
	app.use('/js', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/bootstrap/dist/js/')
		)
	);
	
	/*icon*/
	app.use('/fa', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/@fortawesome/fontawesome-free/css')
		)
	);

	app.use('/fonts', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/@fortawesome/fontawesome-free/js')
		)
	);

	app.use('/fonts', express.static(
		path.resolve(
			path.dirname(__dirname) + '/node_modules/@fortawesome/fontawesome-free/webfonts/')
		)
	);
	/**/
/*----*/
app.listen(app.get('port_prod'));