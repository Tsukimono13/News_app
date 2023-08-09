import Dropdown from 'react-native-input-select';
import React from 'react';

const data = [
	{ label: 'космос', value: 'космос' },
	{ label: 'политика', value: 'политика' },
	{ label: 'наука', value: 'наука' },
	{ label: 'технологии', value: 'технологии' }
];

export const CategoryFilter = ({ category, setCategory }) => {

	return (
		<Dropdown
			placeholder='Выберите категорию...'
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
