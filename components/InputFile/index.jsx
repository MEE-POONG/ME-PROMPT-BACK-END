import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { FaPlus, FaUpload, FaUserPlus } from 'react-icons/fa';

export default function FileInput() {

    return (
        <div className='inputfile'>
            <input type="file" name="file" id="file" />
            <label for="file" className='custom-file-upload'><strong>อัพรูปภาพ</strong></label>
        </div>
    );
}
export function ProfileInput() {
    const [fileImg, setFileImg] = useState([]);
    return (
        <div className='inputfile text-center'>
            <Image
                width={"100%"}
                height="200px"
                src={"../images/default.png"}
                className="object-fit-contain"
                alt="" />
            <input type="file" name="file" id="file" />
            <label for="file" className='custom-file-profile'>
                <FaPlus /> เลือกรูป
            </label>
        </div>
    );
}
export function ImgInput() {

    return (
        <div className='inputfile'>
            <input type="file" name="file" id="file" />
            <label for="file" className='custom-file-upload'><strong>อัพรูปภาพ</strong></label>
        </div>
    );
}
export function GalleryInput() {

    return (
        <div className='inputfile'>
            <input type="file" name="file" id="file" multiple />
            <div className='show-img'>
                <label for="file" className='custom-file-gallery'>
                    <FaUpload />
                </label>
                {/* <Image
                    width="90px"
                    height="90px"
                    src={"../images/default.png"}
                    className="object-fit-contain"
                    alt="" /> */}
            </div>
        </div>
    );
}