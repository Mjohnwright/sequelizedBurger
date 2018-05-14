// Dependencies
// Models in sequelize are just table objects
// =============================================================

module.exports = function(sequelize, DataTypes) {
// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("Burger", { 

        // the name of the burger (a string)
    burger_name: DataTypes.STRING,

    // the burgers devoured status (a boolean)
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultVaule: false
    },

    //timestamp required for JAWSDB
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    timestamps: false
});
// Syncs with DB and creates the table in mySql
return Burger;
}




