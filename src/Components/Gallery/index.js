import React from 'react'
import Image from './Image';
import {
    GalleryContainer
} from './styles'

const Gallery = ({imageUrls}) => 
    <GalleryContainer>
        {imageUrls.map(url =>
            <Image url={url}/> 
        )}
    </GalleryContainer>




export default Gallery