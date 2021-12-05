import view from '../utils/view.js'

export default function Stories(path) {
    console.log(`Stories: ${path}`);
    view.innerHTML = `<div>${path}</div>`;
}