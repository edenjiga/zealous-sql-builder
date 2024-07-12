import { QueryBuilderSubmitObject, RuleTypeObject } from '@edgar/common-types';
import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

const handleUserCase = (
  properties: Required<RuleTypeObject>['properties']
): Prisma.UserWhereInput => {
  const filter: Prisma.UserWhereInput = {};

  Object.keys(properties).forEach((key) => {
    if (key !== 'type') {
      // @ts-ignore
      filter[key] = properties[key];
    }
  });

  return filter;
};

const handleTechnologieCase = (
  properties: Required<RuleTypeObject>['properties']
): Prisma.UserWhereInput => {
  const filter: Prisma.UserWhereInput = {};

  Object.keys(properties).forEach((key) => {
    if (key !== 'type') {
      filter['userTechnologies'] = {
        some: {
          technology: {
            [key]: properties[key],
          },
        },
      };
    }
  });

  return filter;
};

const applyRule = (rule: RuleTypeObject) => {
  switch (rule.properties?.type) {
    case 'User':
      return handleUserCase(rule.properties);
    case 'Technologie':
      return handleTechnologieCase(rule.properties);
    default:
      return {};
  }
};

export const parseQuery = (
  query: QueryBuilderSubmitObject
): Prisma.UserWhereInput => {
  const filters: Prisma.UserWhereInput[] = [];

  const childs = Object.values(query.childrens);

  childs.forEach((child) => {
    switch (child.type) {
      case 'rule':
        filters.push(applyRule(child as RuleTypeObject));
        break;
      case 'group':
        const groupFilter = parseQuery(child as QueryBuilderSubmitObject);
        filters.push(groupFilter);
        break;
    }
  });

  return { [query.condition]: filters };
};

export const filterUsersByQueryBuilder = async (
  query: QueryBuilderSubmitObject
) => {
  const filter = parseQuery(query);

  const users = await prisma.user.findMany({
    where: filter,
    include: {
      userTechnologies: {
        include: {
          technology: true,
        },
      },
    },
  });

  return users;
};
