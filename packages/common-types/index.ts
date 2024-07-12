export type QueryType = 'rule' | 'group';

export type Conditions = 'OR' | 'AND';

export type RuleTypeObject = {
  type: 'rule';
  properties?: {
    type: 'Technologie' | 'User';
    [key: string]: string;
  };
};

export type QueryBuilderSubmitObject = {
  type: QueryType;
  condition: Conditions;
  childrens: {
    [key: string]: QueryBuilderSubmitObject | RuleTypeObject;
  };
};

export type UserResponse = {
  items: Array<User>;
  count: number;
};

export type User = {
  id: number;
  name: string;
  status: string;
  userTechnologies: UserTechnology[];
};

export interface UserTechnology {
  id: number;
  userId: number;
  technologyId: number;
  technology: Technology;
}
export interface Technology {
  id: number;
  name: string;
}
