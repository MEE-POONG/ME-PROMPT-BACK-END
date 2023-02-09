import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function Editor() {
    return (
        <>
            <CKEditor
                config={{
                    uiColor: "#b7fff0",
                    language: 'th',
                    // extraPlugins: "uploadimage",
                    // filebrowserUploadMethod: "form",
                    // filebrowserUploadUrl: ("/uploader/upload"),
                    // filebrowserBrowseUrl: '/addgallery',
                    // toolbar: [
                    // ],
                    extraPlugins: 'easyimage,autogrow,emoji',
                    // removePlugins: 'image',

                }}

            />
        </>
    );
}

export default Editor;