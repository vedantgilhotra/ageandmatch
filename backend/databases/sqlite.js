const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "path_to_database.sqlite"
});

const User = sequelize.define("user",{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age : {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log("created table user if it didn't exist already");
}).catch(() => {
    console.log("could not create table user because of some error");
});

module.exports = {
    User: User
};