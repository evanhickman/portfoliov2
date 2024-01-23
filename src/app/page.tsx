const Home = () => {
  return (
    <main className='min-h-screen min-w-screen flex bg-neutral-900 relative'>
      <section className='basis-6/12 flex flex-col justify-center pl-20 py-5'>
        <h1 className='text-8xl text-animation'>Evan Hickman</h1>
        <h2 className='text-5xl text-animation'>UX Developer / Designer</h2>
      </section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-6 gap-1.5'>
        <div className='box-one'></div>
        <div className='box-two'></div>
        <div className='box-three'></div>
        <div className='box-four'></div>
        <div className='box-five'></div>
        <div className='box-six'></div>
      </section>
    </main>
  );
};

export default Home;
