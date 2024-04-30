import questionaireController from '@/backend/controllers/questionaireController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async listQuestionaire(parent: any, args: any, ctx: any): Promise<schema.Query['listQuestionaire']> {
    return await questionaireController().list(args);
  }
};

const Mutation = {
  async createQuestionaire(parent: any, args: any, ctx: any): Promise<schema.Mutation['createQuestionaire']> {
    return await questionaireController().create(args);
  },
  async updateQuestionaire(parent: any, args: any, ctx: any): Promise<schema.Mutation['updateQuestionaire']> {
    return await questionaireController().update(args);
  },
  async deleteQuestionaire(parent: any, args: any, ctx: any): Promise<schema.Mutation['deleteQuestionaire']> {
    return await questionaireController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
