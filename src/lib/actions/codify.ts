import Prism from 'prismjs';

export default function codify(node: HTMLElement) {
    const codeTag = Array.from(node.getElementsByTagName("code"));
    codeTag.forEach(code => {
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages[code.dataset.lang] || Prism.languages.javascript);
    });
}