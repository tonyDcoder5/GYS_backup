const service = require("./events.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//-----------HELPER FUNCTIONS-------------

//-----------CRUD FUNCTIONS---------------

async function list(req,res,next){
    const data = await service.list()
    res.status(200).json({data})
}

module.exports = {
    list: [asyncErrorBoundary(list)]
}