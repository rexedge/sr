// 1: Import
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from '../../theme/GlobalStyles';
import ThemeSelector from '../../theme/ThemeSelector';
import { useTheme } from '../../theme/useTheme';

// 2: Create a cotainer
const Container = styled.div`
	margin: 5px auto 5px auto;
`;

function Test() {
	// 3: Get the selected theme, font list, etc.
	const { theme, themeLoaded, getFonts } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
		// eslint-disable-next-line
	}, [themeLoaded]);

	// 4: Load all the fonts
	useEffect(() => {
		WebFont.load({
			google: {
				families: getFonts(),
			},
		});
	});

	// 5: Render if the theme is loaded.
	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<Container style={{ fontFamily: selectedTheme.font }}>
						<h1>Theme Builder</h1>
						<p>
							This is a theming system with a Theme
							Switcher and Theme Builder. Do you want to
							see the source code?{' '}
							<a href='https://github.com/atapas/theme-builder'>
								Click here.
							</a>
						</p>
						<ThemeSelector setter={setSelectedTheme} />
					</Container>
				</ThemeProvider>
			)}
		</>
	);
}

export default Test;
