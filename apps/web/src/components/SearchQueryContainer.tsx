/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useGetTechnologies } from '../hooks/useGetTechnologies';
// @ts-ignore
import SearchQueryBuilder from 'search-query-builder';
import { useMemo } from 'react';
import { useGetUsersByQuery } from '../hooks/useGetUserByQuery.js';
import { Table } from './Table.js';
import { Conditions, QueryBuilderSubmitObject } from '@edgar/common-types';

const theme = {
  primaryColor: 'purple',
  secondaryColor: 'black',
  accentColor: 'orange',
  lightestColor: 'white',
  darkestColor: 'black',
};

const uiConfig = {
  addRuleButton: {
    text: 'RULE',
    className: 'add-rule-btn',
    icon: 'plus',
  },
  addGroupButton: {
    text: 'GROUP',
    className: 'add-group-btn',
    icon: 'plus-circle',
  },
  buildButton: {
    text: 'BUILD',
    className: 'build-btn',
  },
  resetButton: {
    text: 'RESET',
    className: 'reset-btn',
  },
};

const conditions: Array<Conditions> = ['AND', 'OR'];

const mainSelectInfo = {
  placeholder: 'Criteria',
  key: 'type',
};

const outputType = 'json';

const styles = {
  FormBorders: {
    width: {
      size: 10,
      measurement: 'px',
    },
    style: 'double',
    radius: {
      size: 35,
      measurement: 'px',
    },
  },
  TreeLines: {
    width: {
      size: 5,
      measurement: 'px',
    },
  },
  Footer: {
    justify_content: 'flex-end',
  },
  Collapsing: {
    size: 88,
    measurement: 'px',
  },
};

export const SearchQueryContainer = () => {
  const { data: technologies } = useGetTechnologies();

  const { data: users, mutate } = useGetUsersByQuery();

  const mainConfig = useMemo(() => {
    return {
      User: [
        {
          placeholder: 'Status',
          key: 'status',
          type: 'select',
          priority: 'required',
          items: [
            {
              name: 'available',
            },
            {
              name: 'unavailable',
            },
          ],
        },
      ],
      Technologie: [
        {
          placeholder: 'Technologie',
          key: 'name',
          type: 'select',
          priority: 'required',
          items: technologies?.map(({ name }) => ({ name })),
        },
      ],
    };
  }, [technologies]);

  return (
    <>
      {technologies?.length && (
        <SearchQueryBuilder
          mainConfig={mainConfig} // all options is required
          uiConfig={uiConfig} // elements configuration [in progress]
          theme={theme} // colors
          mainSelectInfo={mainSelectInfo} // info for main select ( placeholder and key )
          conditions={conditions} // all conditions default [AND OR]
          defaultSelectedConditionIndex={0} // selected selected condition default [0]
          // defaultQuery={defaultQuery} //elements which will be selected default [none]
          outputType={outputType} // type of the parameter below default json [[TBD]]
          onSubmit={(builtQuery: QueryBuilderSubmitObject) => {
            // do smth
            mutate(builtQuery);
            console.log(builtQuery, 'QUERY');
          }}
          styles={styles} // styles related to borders of form, to tree lines, to fotter and colapsing
        />
      )}
      {!!users?.items.length && <Table users={users?.items} />}
    </>
  );
};
