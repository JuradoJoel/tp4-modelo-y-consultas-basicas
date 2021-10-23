module.exports = (sequelize,dataTypes) => {

    let alias = 'Actor';

    let cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        first_name :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        last_name :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        created_at : {
            type : dataTypes.DATE,
            defaultValue : null
        },
        favorite_movie_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }

    let config = {
        tableName : "actors",
        timestamps : true, 
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deleteAt : false
     }


    const Actor = sequelize.define(alias,cols,config)

    return Actor;

}