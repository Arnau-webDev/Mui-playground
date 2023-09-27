import { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
	const [country, setCountry] = useState<string>('');
	const [countries, setCountries] = useState<string[]>([]);
	console.log(countries);

	const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setCountries(typeof value === 'string' ? value.split(',') : value);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setCountry(value);
	};
	return (
		<Box width='250px'>
			<Box marginBottom={4}>
				<TextField
					label='Select country'
					select
					SelectProps={{
						multiple: true
					}}
					size='small'
					color='secondary'
					helperText='Multiple select'
					fullWidth
					value={countries}
					onChange={handleChangeMultiple}>
					<MenuItem value='IN'>India</MenuItem>
					<MenuItem value='US'>USA</MenuItem>
					<MenuItem value='AU'>Australia</MenuItem>
				</TextField>
			</Box>

			<Box>
				<TextField
					label='Select country'
					select
					size='small'
					color='secondary'
					helperText='Single select'
					fullWidth
					value={country}
					onChange={handleChange}>
					<MenuItem value='IN'>India</MenuItem>
					<MenuItem value='US'>USA</MenuItem>
					<MenuItem value='AU'>Australia</MenuItem>
				</TextField>
			</Box>
		</Box>
	);
};

export default MuiSelect;