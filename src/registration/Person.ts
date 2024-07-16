/** Libs */
import { DataTypes, Model, Optional } from 'sequelize';

/** Models */
import sequelize from '../models';

interface PersonAttributes {
  id: number;
  name: string;
  email: string;
}

interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

class Person extends Model<PersonAttributes, PersonCreationAttributes> implements PersonAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'people',
  }
);

export default Person;
