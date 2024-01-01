import Card from './Card';

export default {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const MediaTop = {
    args: {
        type: 'media-top'
    }
}

export const MediaMiddle = {
    args: {
        type: 'media-middle'
    }
}

export const MediaBottom = {
    args: {
        type: 'media-bottom'
    }
}

export const Artwork = {
    args: {
        type: 'artwork'
    }
}