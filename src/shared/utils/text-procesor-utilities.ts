export const upperCaser = (text: string | string[]) => {
    text = Array.isArray(text) ? text : text.split('');
    return text.slice(0,1).join('').toLocaleUpperCase() + text.slice(1).join('');
}

