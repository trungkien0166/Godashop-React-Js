import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductSlider({ product }) {
    const images = [
        {
            // ảnh lớn
            original: product.featured_image,
            // ảnh nhỏ
            thumbnail: product.featured_image,
        }

    ]; const moreImages = product.thumbnailItems.map((thumbnailItem) =>
    ({
        // ảnh lớn
        original: thumbnailItem.name,
        // ảnh nhỏ
        thumbnail: thumbnailItem.name,
    }));
    const allImages = [...images, ...moreImages];
    return <ImageGallery items={allImages} showNav={false} showPlayButton={false} />;

}
