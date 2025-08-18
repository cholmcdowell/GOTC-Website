export class Resource {
    constructor(name, imgPath) {
        this.name = name; // resource type
        this.imgPath; // image file path
    }    

    createImgElement(   ) {
        const img = document.createElement('img');
        img.src = this.imgPath; img.alt = this.name;      
        // CSS class so it can style all resource images
        img.classList.add('resource-img');

        return img;
    }
}