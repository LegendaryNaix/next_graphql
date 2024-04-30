import { combineResolvers, resolverType } from 'fast-graphql';

import user from './user';
import questionaire from './questionaire';

const resolvers: resolverType[] = [ user, questionaire];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
