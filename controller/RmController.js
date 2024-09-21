const rm = {
    index:(req,res)=>{
        res.render('index');
    },
    about:(req,res)=>{
        res.render('about');
    },
    photos:(req,res)=>{
        res.render('photos');
    },
    records:(req,res)=>{
        res.render('records');
    },
    contacts:(req,res)=>{
        res.render('contacts');
    }
};

module.exports = rm;