import React from 'react';

const BannerCard = ({item}) => {
    const {picture}=item
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default BannerCard;