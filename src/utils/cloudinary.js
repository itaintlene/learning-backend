import {v2 as cloudinary} from 'cloudinary'
import fs from fs       // node file system :)

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath) return null
        cloudinary.uploader
        .upload(
            localFilePath, {
                resource_type: 'auto',
            }
        )
        
        // if file is uploaded succesfully
        console.log('file is uploaded on cloudinary', response.url)
        return response;
    }catch (error) {
        console.error('Error uploading file:', error);
    
        // Remove the locally saved file as the upload operation failed
        fs.unlinkSync(localFilePath);
        return null;
    }
}