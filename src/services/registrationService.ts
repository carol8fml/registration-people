import Person from "../registration/Person";
import Phone from "../registration/Phone";

export const getPersons = async () => {
  try {
    const persons = await Person.findAll({ include: ['phones'] });
    return { status: 200, data: persons };
  } catch (error) {
    return { status: 500, error: 'Ocorreu um erro ao buscar as pessoas.' };
  }
};

export const createPerson = async (data: any) => {
  const { name, email, phones } = data;
  try {
    const person = await Person.create({ name, email });
    if (phones && phones.length > 0) {
      const phoneInstances = phones.map((number: string) => ({ number, personId: person.id }));
      await Phone.bulkCreate(phoneInstances);
    }
    const personWithPhones = await Person.findByPk(person.id, { include: ['phones'] });
    return { status: 201, data: personWithPhones };
  } catch (error) {
    return { status: 500, error: 'Ocorreu um erro ao criar a pessoa.' };
  }
};

export const updatePerson = async (id: string, data: any) => {
  const { name, email, phones } = data;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return { status: 404, error: 'Pessoa não encontrada.' };
    }
    await person.update({ name, email });
    if (phones && phones.length > 0) {
      await Phone.destroy({ where: { personId: id } });
      const phoneInstances = phones.map((number: string) => ({ number, personId: id }));
      await Phone.bulkCreate(phoneInstances);
    }
    const updatedPerson = await Person.findByPk(id, { include: ['phones'] });
    return { status: 200, data: updatedPerson };
  } catch (error) {
    return { status: 500, error: 'Ocorreu um erro ao atualizar a pessoa.' };
  }
};

export const deletePerson = async (id: string) => {
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return { status: 404, error: 'Pessoa não encontrada.' };
    }
    await Phone.destroy({ where: { personId: id } });
    await person.destroy();
    return { status: 200, data: 'Pessoa excluída com sucesso.' };
  } catch (error) {
    return { status: 500, error: 'Ocorreu um erro ao excluir a pessoa.' };
  }
};
