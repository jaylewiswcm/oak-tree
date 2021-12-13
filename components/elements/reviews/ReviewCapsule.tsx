import React, {useEffect, useState, useCallback} from 'react'
// Components
import Previous from '../buttons/Previous';
import Next from '../buttons/Next';
import Review from './Review';
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from './ReviewButtons';
// Types
type numberArray = Array<Number>;

const ReviewCapsule = () => {

    const [emblaRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false, align: "center", })
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollSnaps, setScrollSnaps] = useState<numberArray>([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
      ]);

      const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect])

    return (
        <div className='review-capsule'>
        <div className='button-wrapper prev-wrapper'>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} selected={false}/>
        </div>
        <div className='review-carousel embla' ref={emblaRef}>
            <div className="embla__container">
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </div>

        <div className='button-wrapper next-wrapper'>
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} selected={false}/>
          
        </div>
        <div className='button-wrapper mobile-btn-wrapper'>
            <Previous id='review-next' img='white-bg' classname='review-capsule-btns' />
            <Next id='review-next' img='white-bg' classname='review-capsule-btns' />
        </div>


        <div className='carousel-dots'>

        {scrollSnaps.map((_, index) => (
                <DotButton 
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                    enabled={true}
                />
        ))}
{/*          
            <div className='dot active-dot'></div>
            <div className='dot'></div>
            <div className='dot'></div> */}
        </div>
      </div>
    )
}


export default ReviewCapsule;