const {Model, DataTypes} = require('sequelize');
class animalote extends Model {
  static init (sequelize){
    super.init(
      {
        id_fk_animal: DataTypes.INTEGER,
        id_fk_lote: DataTypes.INTEGER,
        dt_entrada: DataTypes.DATE,
        dt_saida: DataTypes.DATE,
        ativo_bez: DataTypes.BOOLEAN
      },
      {sequelize},
      (animalote.associate = (models) => {
        animalote.belongsTo(models.loteModel, { 
          as: "loteAnimal", 
          foreignKey: "id_fk_lote", 
          onUpdate: "CASCADE", 
          onDelete: "CASCADE", 
        }),
        animalote.belongsToMany(models.animalModel, {
          as: "animaisLotes", 
          foreignKey: "id_fk_animal", 
          onUpdate: "CASCADE", 
          onDelete: "CASCADE", 
        });
      })
    );
  };
} 
module.exports = animalote;