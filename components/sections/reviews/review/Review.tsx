import React, {useState, useEffect} from 'react'
import Image from 'next/image';

interface ComponentProps {
    review: any
}

export const Review = ({review}:ComponentProps) => {
    const [userAvatar, setUserAvatar] = useState('')
    const [avatarColourClass, setAvatarColourClass] = useState('')
    
    useEffect(() => {
        createAvatar();
        randomiseAvatarClass();
    },[])

    if(!review) {
        return <div>Loading...</div>
    }



    const createAvatar = () => {
        const userName = review.consumer.displayName.split(' ');
        let avatar;
        switch(userName.length) {
            case 1: 
                    avatar = userName[0].charAt(0).toUpperCase() + userName[0].charAt(1);
                    break;
            case 2: 
                    if(userName[1] !== '') {
                        avatar = userName[0].charAt(0).toUpperCase() + userName[1].charAt(0).toUpperCase()
                    } else {
                        avatar = userName[0].charAt(0).toUpperCase() + userName[0].charAt(1);
                    }
                    break;
            case 3: 
                    avatar = userName[0].charAt(0).toUpperCase() + userName[1].charAt(0).toUpperCase()
                    break;
            default: 
                    avatar = userName[0].charAt(0).toUpperCase() + userName[1].charAt(0).toUpperCase()
                    return;
        }
        setUserAvatar(avatar)
    }

    const randomiseAvatarClass = () => {
        const classArray = ["avatar-yellow-and-purple","avatar-red","avatar-purple","avatar-green","avatar-green-flipped"];
        console.log(classArray[Math.floor(Math.random() * classArray.length)])
        setAvatarColourClass(classArray[Math.floor(Math.random() * classArray.length)])
    }


  return (
    <>
    <div className="review-header">
        <div  className={`avatar ${avatarColourClass}`}>{userAvatar}</div>
        <div className='details'>
            <p className='name'>{review.consumer.displayName}</p>
            <p className='location'>{review.consumer.displayLocation}</p>
        </div>
        <div className='rating'>
            <img 
                src={`/trustpilot/star-ratings/${review.stars}-star.svg`}
                alt={`Rating: ${review.stars} stars`}
                width='105.2'
                height='19.35' />
        </div>
    </div>
    <div className='review-content'><p>{review.text.substring(0, 250)}{review.text.length >= 150 && '...'}</p></div>
    <div className='review-footer'>
        <p className='date'>{ (review.createdAt instanceof Date) ? review.createdAt.toLocaleDateString() : new Date(review.createdAt).toLocaleDateString() }</p> 
        <div className='logo'>
            <img
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
        </div>
    </div>
</> 
  )
}
