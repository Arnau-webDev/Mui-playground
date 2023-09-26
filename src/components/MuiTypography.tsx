import { Typography } from '@mui/material';

const MuiTypography = () => {
	return (
		<div>
			<Typography variant="h1">Heading 1</Typography>
			<Typography variant="h2">Heading 2</Typography>
			<Typography variant="h3">Heading 3</Typography>
			<Typography variant="h4" component="h1" gutterBottom>Heading 4</Typography>
			<Typography variant="h5">Heading 5</Typography>
			<Typography variant="h6">Heading 6</Typography>

			<Typography variant="subtitle1">Subtitle1</Typography>
			<Typography variant="subtitle2">Subtitle2</Typography>

			<Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit molestiae neque cum omnis ducimus eum?</Typography>
			<Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nobis voluptatum, voluptatem ipsum quia ducimus!</Typography>
		</div>
	);
};

export default MuiTypography;
