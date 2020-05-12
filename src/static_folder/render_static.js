class render_static{

	constructor(list_static,reference_app){
		/*Asignacion*/
		this.list_static = list_static;
		this.reference_app = reference_app;
		/*run*/
		//return this.render_list();
	}

	render_list(){
		if(typeof this.list_static != 'Array')
			return new Error('La lista debe ser un arreglo');
		
		for( let item of this.list_static ){
			console.log(item)
		}

	}

}

module.exports = render_static;