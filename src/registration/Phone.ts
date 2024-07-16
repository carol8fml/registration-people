/** Libs */
import { DataTypes, Model, Optional } from 'sequelize';

import Person from './Person';
import sequelize from '../models';

interface PhoneAttributes {
  id: number;
  number: string;
  personId: number;
}

interface PhoneCreationAttributes extends Optional<PhoneAttributes, 'id'> {}

class Phone extends Model<PhoneAttributes, PhoneCreationAttributes> implements PhoneAttributes {
  public id!: number;
  public number!: string;
  public personId!: number;
}

Phone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'phones',
  }
);

Person.hasMany(Phone, { as: 'phones', foreignKey: 'personId' });
Phone.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'person',
});

export default Phone;
