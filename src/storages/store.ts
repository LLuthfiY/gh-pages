import { writable } from 'svelte/store'

const theme = writable('Nord')
const globalCommand = writable('')
const lines = writable([''])
export { globalCommand, lines, theme }