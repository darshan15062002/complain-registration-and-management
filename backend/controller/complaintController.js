const complaint = require('../model/complaintModel')
exports.registerComplaint = async (req, res, next) => {
    const response = await complaint.create(req.body)
    res.status(201).json({
        success: true,
        response: response
    })

}
exports.getComplaint = async (req, res, next) => {
    const response = await complaint.find()
    res.status(201).json({
        success: true,
        response: response
    })
}
exports.deleteComplaint = async (req, res, next) => {
    console.log(req.params.id);
    // const result = await complaint.findById(req.params.id);
    // console.log(result);

    const response = await complaint.deleteOne({ _id: req.params.id });

    res.status(201).json({
        success: true,
        response: response
    })
}