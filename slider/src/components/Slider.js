import React, { useState } from 'react';
import { sliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = ({ slides }) => {

  const [current, setCurrent] = useState(0);

  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  }


  const prevSlide = () => {

    setCurrent(current === 0 ? slideLength - 1 : current - 1)

  }

  const handleAdjustQuantity = (opName) => {
    // updateCart(dish._id, count);
    // setShow(true);
    // setNotificationText(opName === 'increment' ? 'ITEM_QTY_INCREASED' : 'ITEM_QTY_DECREASED');
    console.log('Adjusting quantity ..');

  }

  const handleRemoveDish = () => {

    console.log('Inside remove dish');
  }


  const handleCartOperation = (op) => {

    let newCount;
    switch (op) {

      case 'increment':
        console.log('Inside increment:');
        // newCount = count + 1;
        // setCount(newCount);
        handleAdjustQuantity(op);
        break;

      case 'decrement':
        console.log('Inside decrement:');
        // newCount = count - 1;
        // newCount > 1 ? setCount(newCount) : setCount(1);
        handleAdjustQuantity(op);
        break;

      case 'remove':
        console.log('Inside remove');
        handleRemoveDish();
        break;

      default:
        break;

    }

  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {
        sliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (

                <div className="container">
                  <img src={slide.image} alt="My shots"
                    className="image"
                  />

                  <label style={{ fontWeight: 'bold', marginLeft: '30px', marginTop: '30px' }}>{slide.short_name}</label>
                </div>
              )}

            </div>
          )
        })
      }
    </section>
  )
}

export default Slider;