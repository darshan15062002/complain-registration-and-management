const jwt = require('jsonwebtoken');
const AdminUser = require('../model/adminUserModel')
const sendToken = require('../utils/sendToken')
exports.authAdmin = async (req, res, next) => {
    const { email, password } = req.body
    console.log(email, password);
    const user = await AdminUser.findOne({ email, password })

    if (!user) {
        return res.status('400').json({
            success: false,
            message: 'user not found'
        })
    }
    sendToken(user, res, 200)

}
exports.verify = (req, res, next) => {
    const auth = req.headers.authorization
    console.log(auth);
    if (auth) {
        const token = auth.split(" ")[1]
        const decodedToken = jwt.verify(token, process.env.JWT_SCREAT);
        console.log(decodedToken);
        const userId = decodedToken.id;
        console.log(userId);
        AdminUser.findById(userId)
            .then(user => {
                if (!user) {
                    return res.status(401).json({ message: 'User not found' });
                }
                return res.status(401).json({ success: true, user });
            })
    }
    else {
        res.status(400).json({
            message: 'not auth'
        })
    }


}