const handle = (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);
    console.log(req.app.locals);
    res.send('THis is about page');
};

export default handle;
