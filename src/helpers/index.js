import colors from '../assets/colors.json'
import Trianglify from 'trianglify'

export const patternGen = () => {
	return Trianglify({
		height: 100,
		width: 2000,
		cellSize: 200 + (Math.random() * 10),
		xColors: colors
	})
}