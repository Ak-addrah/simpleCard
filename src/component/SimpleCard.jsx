import React, { Component } from 'react';
import Title from './title';
import Description from './description';
import Image from './image';

class SimpleCard extends Component {
  render() {
    return (
      
      <div className="bg-blue-gray-500 min-h-screen flex justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-5 bg-white rounded-lg shadow-md p-5 max-w-lg mx-auto my-5 h-[250px]">
          <div className="w-full">
            <Image
              url="https://img.freepik.com/premium-photo/happy-fashion-african-young-black-lady-wears-trendy-glasses-headphones-listening-music-neon-light_709963-1364.jpg"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 mt-[70px]">
            <Title text="A3's Simple Card" className="text-2xl font-bold mb-2" />
            <Description text="Music and Smiles!" className="text-gray-600" />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
