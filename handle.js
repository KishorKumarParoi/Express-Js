const handle = (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);
    console.log('🚀 ~ file: handle.js:5 ~ handle ~ req.app.locals:', req.app.locals);
    res.send('THis is about page');
};

export default handle;
