import React from 'react'

const DisplayShipInfo = (props) => {

  const {shipData}=props;
  const {billTo,shippingType,date,quotation}=shipData;
  return (
    <div className='m-4'>
        <div className="flex justify-between">
            <div>
                <p><b>Bill To:</b> {billTo}</p>
                <p className='mt-2'><b>Shipping Type:</b> {shippingType}</p>
            </div>
            <div>
                <p><b>Date:</b> {date}</p>
                <p className='mt-2'><b>Quotation:</b> {quotation}</p>
            </div>
        </div>
    </div>
  )
}

export default DisplayShipInfo