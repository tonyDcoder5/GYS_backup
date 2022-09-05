const service = require("./posts.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//-----------HELPER FUNCTIONS-------------

//-----------CRUD FUNCTIONS---------------

async function list(req, res, next) {
	let data = await service.list();
	//adds user data to the post objects
	for (let i=0;i<data.length;i++){
		const user_data  = await service.readUser(data[i].user_id)
		data[i] = {...data[i],user_data}
	}
	res.status(200).json({ data });
}

module.exports = {
	list: [asyncErrorBoundary(list)],
};
