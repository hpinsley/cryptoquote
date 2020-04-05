/// <reference types="react-scripts" />

// I included these "modules" so typescript would let me import sound files as per
// https://stackoverflow.com/questions/56782452/how-to-fix-module-not-found-for-audio-files-using-file-loader-images-css-an
declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module '*.wav' {
    const src: string;
    export default src;
}