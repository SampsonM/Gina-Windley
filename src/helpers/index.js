import { colors } from '../assets/constants'
import Trianglify from 'trianglify'

export const patternGen = () => {
	let pattern = Trianglify({
		height: window.innerHeight,
		width: window.innerWidth,
		cell_size: 600 + Math.random() * 65,
		x_colors: colors
	})

	return pattern.png()
}