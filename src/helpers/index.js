import { colors } from '../assets/constants'
import Trianglify from 'trianglify'

export const patternGen = () => {
	return Trianglify({
		height: window.innerHeight,
		width: window.innerWidth,
		cell_size: 800 + (Math.random() * 10),
		x_colors: colors
	})
}