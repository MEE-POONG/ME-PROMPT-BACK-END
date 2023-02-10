import React from 'react';
import VuetifyImageInput from 'vuetify-image-input';

export default function FileInput() {

    return (
        <>
            <input type="file" name="file" id="file" className="inputfile" />
            <label for="file" className='custom-file-upload'><strong>อัพรูปภาพ</strong></label>
        </>
    );
}
export function ProfileInput() {

    return (
        <>
            <input type="file" name="file" id="file" className="inputprofile" />
            <label for="file"><strong>อัพรูปภาพ</strong></label>
        </>
    );
}
export function ImgInput() {

    return (
        <>
            <input type="file" name="file" id="file" className="imginput" />
            <label for="file"><strong>อัพรูปภาพ</strong></label>
        </>
    );
}
export function GalleryInput() {

    return (
        <>
            <input type="file" name="file" id="file" className="inputfile" />
            <label for="file"><strong>อัพรูปภาพ</strong></label>
        </>
    );
}