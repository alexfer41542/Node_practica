module.exports = {
	render_title: function() {
        return 'Titulo';
    },

    context : function (context) {
    	return JSON.stringify(context);
	}

};