import Dropdown from 'react-native-input-select';
import React from 'react';

const data = [
    {
        label: 'space',
        value: 'space',
    },
    {
        label: 'politic',
        value: 'politic',
    },
    {
        label: 'general',
        value: 'general',
    },
    {
        label: 'art',
        value: 'art',
    },
    {
        label: 'tech',
        value: 'tech',
    },
];
const CategoryFilter = ({category, setCategory}) => {

    return (
        <Dropdown
            placeholder="Select a category..."
            options={data}
            selectedValue={category}
            onValueChange={(value) => setCategory(value)}
            primaryColor={'grey'}
            isMultiple
            dropdownStyle={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                width: '93%'
            }}
        />
    );
};


export default CategoryFilter;