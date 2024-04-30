import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import Questionaire from '@/backend/models/Questionaire';

function questionaireController() {
  
  const controllers = crudController<schemaType.Questionaire>(Questionaire);

  controllers.create = async (args) => {
    try {
      // Creating a new document in the collection
      if (!args?.body) {
        return null;
      }
      const result: any = await new Questionaire(args?.body).save();
      console.log('🚀 ~ file: questionaireController.ts ~ line 17 ~ controllers.create = ', result);
      if (!result) {
        return null;
      } else {
        return result;
      }
    } catch (err) {
      return null;
    }
  };
  return controllers;
}

export default questionaireController;
