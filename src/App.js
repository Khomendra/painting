import Record from './record.json';
import './App.css';

const App = () => {
  return (
      <>
          <div className='flex items-center justify-center h-screen w-full'>
            <div className="bg-slate-50 text-black font-bold border shadow-lg p-10">
              <h1 className="font-bold leading-tight text-4xl mt-2 mb-2 ml-2 text-600">
                Summer Art Camp! 5 Days of Artists and Painting Monet, <br /> Van Gogh, Matisse, & More
              </h1>
              <p className='mt-2 mb-2 ml-2 text-lg text-gray-400'>Multi-Day Course 
              <i className="far fa-question-circle ml-3"></i> </p>

              <div className="flex mt-10 mb-2 ml-2">
                  <div className="">
                      <p className="para text-base max-w-prose font-semibold tracking-normal">
                        In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among
                        others and then recreate paintings using creyon and watercolor. Students will 
                        have fun learning about the artists  creating their own art inspired by their
                        work.
                      </p>
                      
                      <div className="pt-5 pb-5 flex">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg"
                            className="h-10 rounded-full" alt="" />
                            <p className="mt-2 ml-3 text-indigo-700 text-lg">Kimberly R Moseler</p>
                      </div>
                        
                      <div className="pb-3 flex">
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i>
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i>
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> 
                            <p className="text-gray-500 font-normal text-sm ml-2">467 total review for this teacher</p>
                      </div>

                      <div className="pb-3 flex">
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i>
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i>
                            <i className="fa-solid fas fa-star fa-lg text-yellow-400"></i> 
                            <p className="text-gray-500 font-normal text-sm ml-2">5 review for this className</p>
                      </div>
                      
                      <p className="text-lg font-medium">Completed by 21 learners</p>

                      <div className="pt-8 flex-row flex space-x-6">
                            <button type="button" className="inline-block px-8 py-2.5 bg-indigo-600 text-white font-medium text-lg rounded-full">
                            See className Schedule <i className="fas fa-angle-right fa-lg pt-2"></i></button>

                            <p className='text-lg text-indigo-700'><i className="fas fa-heart pt-5 pl-5"></i> Save</p>

                            <p className='text-lg text-indigo-700'><i className="fas fa-share pt-5 pl-5"></i> Share</p>
                      </div>
                    
                  </div>
                  <div className="outer flex ml-2">
                    {
                      <div className='inner-left'>
                        <img src="./images/sun.jpg" alt="" />
                        {/* <img src={Record.image} alt="" /> */}
                      </div>
                    }
                    {
                      <div className='inner-right ml-1'>
                        <div className='inner-right-firt'><img src="./images/sky.jpg" alt="" /></div>
                        <div className='inner-right-second mt-1'><img src="./images/starry.jpg" alt="" /></div>
                        
                      </div>
                    }
                  </div>
              </div>
            </div>
        </div>
      </>
  );
}

export default App;
