import {useState} from 'react';
import styled from 'styled-components';
import ProgressDots from "@/components/person_card/gallery/ProgressDots";
import Arrows from "@/components/person_card/gallery/Arrows";
import BigImg from "@/components/person_card/gallery/BigImg";
import ImageList from "@/components/person_card/gallery/ImageList";

const GalleryContainer = styled.div<{$height: string}>`
    position: relative;
    height: ${({$height}) => $height};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`

export default function Gallery({ images, height = "100%" } : { images: (string | undefined)[], height?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);// Показываем максимум 2 изображения

    const handleNext = () => {
        setCurrentIndex((prev) => {
            if (prev === images.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) {
                return images.length - 1;
            } else {
                return prev - 1;
            }
        })
    };

    const arrowsAndProgressDots = <>
        <Arrows onLeftClick={handlePrev} onRightClick={handleNext} />
        <ProgressDots currentIndex={currentIndex} size={images.length} />
    </>

    return (
        <GalleryContainer $height={height}>
            <ImageList currentImage={images[currentIndex]}
                       currentIndex={currentIndex}
                       onClick={() => setModalOpen(true)}
            >
                {arrowsAndProgressDots}
            </ImageList>
            <BigImg isOpen={isModalOpen}
                    currentImage={images[currentIndex]}
                    currentIndex={currentIndex}
                    onClick={() => setModalOpen(false)}
            >
                {arrowsAndProgressDots}
            </BigImg>
        </GalleryContainer>
    );
}