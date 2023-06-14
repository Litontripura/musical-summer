import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const updateclass= useLoaderData()
    console.log(updateclass);
    return (
        <div>
          ball
        </div>
    );
};

export default UpdateClass;