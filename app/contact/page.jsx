const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/3b46967b-b3b3-45d2-8c06-9bc6d3405d44'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#3be29f] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            {`Submit the form below or shoot me an email - omarmagdy151299@gmail.com`}
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          required
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
          required
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          required
        ></textarea>
        <button className='text-white border-2 hover:bg-[#3be29f] hover:border-[#3be29f] px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact
