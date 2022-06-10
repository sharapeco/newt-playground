export const htmlToText = (html: string, options: Object): string => {
	if (typeof document !== 'object') {
		return ''
	}
	const node = document.createElement('div')
	node.innerHTML = html
	return node.textContent
}
