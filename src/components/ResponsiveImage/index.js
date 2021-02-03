import React from 'react';

const ResonsiveImage = (
	{ margin, height, maxWidth, src, alt, objectFit },
	props
) => (
	<img
		src={src}
		alt={alt}
		style={{
			margin: `${margin}`,
			display: 'block',
			width: '100%',
			height: `${height ? height : 'auto'}`,
			objectFit,
			maxWidth,
		}}
		{...props}
	/>
);

ResonsiveImage.defaultProps = {
	maxWidth: 'unset',
	src: '',
	alt: '',
	objectFit: 'contain',
};

export default ResonsiveImage;
