import React from 'react'

const DisplayCompInfo = (props) => {
    const {compData}=props;
    const {name,registeredAddress,branchAddress,contact,email,website}=compData;
  return (
    <div className='m-4 '>
        <div className='flex'>

            {/* first div */}
            <div className='w-1/2 '>
               <img src="https://play-lh.googleusercontent.com/_nEJQJjt37vlKh8dyS9soS2yoWtqvnUHc7RooA1r5SvqhK6Nk8b8LKr5KnTRi7u-Uco" alt="" className='h-36'/>
            </div>

            {/* second div */}
            <div className='w-1/2  p-4'>
              <section className='float-right'>
                <p><b>Company Name:</b> {name}</p>
                <p className='mt-2'><b>Registered Address:</b> {registeredAddress}</p>
                <p className='mt-2'><b>Branch Address:</b> {branchAddress}</p>
              </section>
            </div>

        </div>

        <div className="flex justify-between  mt-4">
            <p><b>Contact:</b> {contact}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Website:</b> {website}</p>

        </div>
    </div>
  )
}

export default DisplayCompInfo