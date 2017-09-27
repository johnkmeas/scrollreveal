import { each } from '../../utils/generic'

export default function destroy () {
	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, element => {
		element.node.setAttribute('style', element.styles.inline)
		element.node.removeAttribute('data-sr-id')
	})

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, container => {
		if (container.node === document.documentElement) {
			window.removeEventListener('scroll', this.delegate)
			window.removeEventListener('resize', this.delegate)
		} else {
			container.node.removeEventListener('scroll', this.delegate)
			container.node.removeEventListener('resize', this.delegate)
		}
	})

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {},
	}
}
