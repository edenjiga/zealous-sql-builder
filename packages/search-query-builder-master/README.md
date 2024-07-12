# Search Query Builder

> a form to build queries

[![NPM](https://img.shields.io/npm/v/search-query-builder.svg)](https://www.npmjs.com/package/search-query-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save search-query-builder
```

### Usage

```jsx harmony
import React from 'react';

import SearchQueryBuilder from 'search-query-builder';

const theme = {
     primaryColor:'purple',
     secondaryColor:'black',
     accentColor:'orange',
     lightestColor:'white',
     darkestColor:'black'
};

const uiConfig = {
    addRuleButton:  {
        text: 'RULE',
        className: 'add-rule-btn',
        icon: 'plus'
    },
    addGroupButton: {
        text: 'GROUP',
        className: 'add-group-btn',
        icon: 'plus-circle'
    },
    buildButton:  {
        text: 'BUILD',
        className: 'build-btn'

    },
    resetButton:  {
        text: 'RESET',
        className: 'reset-btn'
    }
};

const mainConfig = {
    'CATEGORY': [
        {
            'placeholder': 'Category',
            'key': 'category',
            'type': 'select',
            'priority': 'required',
            'items': [
                {
                    'name': 'First'
                },
                {
                    'name': 'Second'
                },
                {
                    'name': 'Third'
                }
            ]
        },
        {
            'placeholder': 'Date',
            'key': 'date',
            'type': 'date',
            'priority': 'not_required',
            'format': 'DD-MM-YYYY'
        }
    ]
}

const defaultQuery = {
    condition: 'OR',
    type: 'group',
    id: 'ID1586350327391',
    childrens: {
        'ID1586350327393': {
            type: 'rule',
            properties : {
                'type': 'CATEGORY',
                'category' : 'Third'
            }
        },
        'ID1586350327395': {
            type: 'rule',
            properties : {
                type: 'CATEGORY',
                category : 'First',
                date : '03-05-2020'
            }
        }
    }
};

const conditions = ['AND', 'OR'];

const mainSelectInfo = {
    placeholder: 'Criteria',
    key: 'type',
}

const minimalMode = false;

const outputType = 'json';

const styles = {
    FormBorders: {
        width: {
            size: 10,
            measurement: 'px'
        },
        style: 'double',
        radius: {
            size: 35,
            measurement: 'px'
        },
    },
    TreeLines: {
        width: {
            size: 5,
            measurement: 'px'
        },
    },
    Footer: {
        justify_content: 'flex-end'
    },
    Collapsing: {
        size: 88,
        measurement: 'px'
    }
};

function YourComponent() {
    return (
        <SearchQueryBuilder
            mainConfig={mainConfig} // all options is required
            uiConfig={uiConfig} // elements configuration [in progress]
            theme={theme} // colors
            minimalMode={minimalMode} // everything black and white 
            mainSelectInfo={mainSelectInfo} // info for main select ( placeholder and key )
            conditions={conditions} // all conditions default [AND OR]
            defaultSelectedConditionIndex={0} // selected selected condition default [0]
            defaultQuery={defaultQuery} //elements which will be selected default [none]
            outputType={outputType} // type of the parameter below default json [[TBD]]
            onSubmit={builtQuery => {
                // do smth 
            }}
            styles = {styles} // styles related to borders of form, to tree lines, to fotter and colapsing
        />
    )
}

```

