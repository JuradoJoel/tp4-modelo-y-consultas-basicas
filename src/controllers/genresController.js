const db = require ('../database/models');

module.exports = {
    list : (req,res) =>{
        db.Genre.findAll()
            .then(genres => {
            /* res.send(movies) */
                return res.render('genresList',{
                    genres
            })
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then(genres=> {
                /* res.send(movie) */
                return res.render('genresDetail',{
                    genres
                })
            })
            .catch(error => console.log(error))
    }
}