// create a getImageUrl function in image root file link
export const getImageUrl = (path) => {
    let thisUrl = URL(`assets/${path} `, import.meta.url).href;
    console.log(thisUrl);
}