import { Ref, ref } from "vue"
import { Badge } from "../../models/models"

export const badges = ref<Badge[]>([
    {
        label: 'HTML5',
        labelColor: 'E34F26',
        color: 'E34F26',
        style: 'plastic',
        logo: 'HTML5',
        logoColor: 'white'
    },
    {
        label: 'CSS3',
        labelColor: '1572B6',
        color: '1572B6',
        style: 'plastic',
        logo: 'CSS3',
        logoColor: 'white'
    },
    {
        label: 'Scss',
        labelColor: 'CC6699',
        color: 'CC6699',
        style: 'plastic',
        logo: 'Sass',
        logoColor: 'white'
    },
    {
        label: 'Sass',
        labelColor: 'CC6699',
        color: 'CC6699',
        style: 'plastic',
        logo: 'Sass',
        logoColor: 'white'
    },
    {
        label: 'Angular',
        labelColor: 'd8614b',
        color: 'red',
        style: 'plastic',
        logo: 'Angular',
        logoColor: 'white'
    },
    {
        label: 'Vue',
        labelColor: '41b883',
        color: '41b883',
        style: 'plastic',
        logo: 'Vue.js',
        logoColor: 'white'
    },
    {
        label: 'Javascript',
        labelColor: 'f8da59',
        color: 'f8da59',
        style: 'plastic',
        logo: 'JavaScript',
        logoColor: 'black'
    },
    {
        label: 'Typescript',
        labelColor: '3178C6',
        color: '3178C6',
        style: 'plastic',
        logo: 'TypeScript',
        logoColor: 'white'
    },
    {
        label: 'Ruby',
        labelColor: 'CC342D',
        color: 'CC342D',
        style: 'plastic',
        logo: 'Ruby',
        logoColor: 'white'
    },
    {
        label: 'RoR',
        labelColor: 'CC0000',
        color: 'CC0000',
        style: 'plastic',
        logo: 'Ruby on Rails',
        logoColor: 'white'
    },
    {
        label: 'Nodejs',
        labelColor: '339933',
        color: '339933',
        style: 'plastic',
        logo: 'Node.js',
        logoColor: 'white'
    },
    {
        label: 'Deno',
        labelColor: '000000',
        color: '000000',
        style: 'plastic',
        logo: 'Deno',
        logoColor: 'white'
    },
    {
        label: 'Python',
        labelColor: '3178C6',
        color: 'f8da59',
        style: 'plastic',
        logo: 'Python',
        logoColor: 'white'
    },
    {
        label: 'Flask',
        labelColor: '009943',
        color: '009943',
        style: 'plastic',
        logo: 'Flask',
        logoColor: 'white'
    },
    {
        label: 'Webpack',
        labelColor: '8DD6F9',
        color: '8DD6F9',
        style: 'plastic',
        logo: 'Webpack',
        logoColor: 'white'
    },
    {
        label: 'Rollup',
        labelColor: 'EC4A3F',
        color: 'EC4A3F',
        style: 'plastic',
        logo: 'Rollup.js',
        logoColor: 'white'
    }
])

export function mapBadge() {
    const mappedBadge = (language: string) => {

        if(language == null) return `https://img.shields.io/badge/-Doc-lightgray?style=plastic&labelColor=critical&logoColor=white&logo=Read the Docs`

        const findLanguage = badges.value
        .map((el) => el.label.toLowerCase())
        .findIndex(el => el.includes(language.toLowerCase()));

        if(findLanguage === -1) return `https://img.shields.io/badge/-${language}-lightgray?style=plastic&labelColor=white`;
        const {label, color, style, logo, labelColor, logoColor } = badges.value[findLanguage];

        return `https://img.shields.io/badge/-${label}-${color}?style=${style}&logo=${logo}&labelColor=${labelColor}&logoColor=${logoColor}`;
    };

    return { mappedBadge }
}