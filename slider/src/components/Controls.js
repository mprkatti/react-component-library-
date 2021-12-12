import React from 'react'

export const Controls = () => {

  const handleAdjustQuantity = (opName) => {
    // updateCart(dish._id, count);
    // setShow(true);
    // setNotificationText(opName === 'increment' ? 'ITEM_QTY_INCREASED' : 'ITEM_QTY_DECREASED');
    console.log('Adjusting quantity ..');

  }

  const handleRemoveDish = () => {

    console.log('Inside remove dish');
    // removeItemFromCart(dish._id);

    // setShow(true);
    // setNotificationText('REMOVE_FROM_CART');
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
    <>
      <div className="controls">
        <div className="decrease mr-4" onClick={() => { handleCartOperation('decrement') }}>
          <i className="fa fa-minus" title="Decrease Quantity" ></i>
        </div>
        <div className="increase mr-4" onClick={() => { handleCartOperation('decrement') }}>
          <i className="fa fa-plus" title="Increase Quantity" ></i>
        </div>
        <div className="remove" onClick={() => handleCartOperation('remove')}>
          <i className="fa fa-trash " title="Remove Dish"></i>
        </div>
      </div>
    </>
  )
}

