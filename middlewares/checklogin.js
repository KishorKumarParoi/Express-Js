import jwt from 'jsonwebtoken';

const checkLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { username, userId } = decoded;
        req.username = username;
        req.userId = userId;
        next();
    } catch (err) {
        next('Authentication failed!');
    }
};

export default checkLogin;
