import { Platform, StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	contentContainer: {
		marginTop: Platform.OS === 'ios' ? 40 : 10,
		marginHorizontal: '-5%',
		backgroundColor: colors.BANANA_YELLOW,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	backContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		left: -15,
	},
	backButtonLabel: {
		fontFamily: 'open-sans-light',
		fontWeight: '300',
		fontSize: 17,
		color: colors.NAVY_BLUE,
	},
});
