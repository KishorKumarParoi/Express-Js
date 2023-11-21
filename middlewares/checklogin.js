import jwt from 'jsonwebtoken';

const checkLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { username, userId } = decoded;
        req.username = username;
        req.userId = userId;
        console.log(req.username, req.userId);
        next();
    } catch (err) {
        // res.status(401).json({ 'Error Happend': 'Authentication failures!' });
        // res.status(401).json({ error: `${err}` });
        // next();
        next('Authentication failures!');
    }
};

export default checkLogin;
