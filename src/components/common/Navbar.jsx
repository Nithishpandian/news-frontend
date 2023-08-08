import moment from "moment"

const Navbar = () => {
  let date = moment(Date.now()).format("dddd, MMMM DD, YYYY")
  return (
    <div className=" text-[#180901] font-pangolin">
        <div className=" flex justify-around items-center">
          <h3 className=" text-[10px] md:text-base">Vol. 127 - N. 39</h3>
          <h1 className=" font-lilita text-[#110600] text-2xl sm:text-3xl md:text-4xl xl:text-5xl">DAILY READS</h1>
          <h3 className=" text-[10px] md:text-base">Price: Free</h3>
        </div>
        <div className="flex items-center mt-3">
          <div className=" h-1 w-[13.2rem] sm:w-72 md:w-[100%] bg-[#161616]"></div>
          <h3 className=" w-full text-center text-xs sm:text-base lg:text-xl">{date}</h3>
          <div className=" h-1 w-[13.2rem] sm:w-72 md:w-[100%] bg-[#161616]"></div>
        </div>
        <ul className="flex justify-between md:justify-around font-bold pt-8 pb-5 sm:px-4 md:px-4 lg:px-36 xl:px-44">
          <li><a className=" duration-300 hover:text-stone-600" href="/">Home</a></li>
          <li><a className=" duration-300 hover:text-stone-600" href="/business">Business</a></li>
          <li><a className=" duration-300 hover:text-stone-600" href="/entertainment">Entertainment</a></li>
          <li className="hidden md:flex"><a className=" duration-300 hover:text-stone-600" href="/health">Health</a></li>
          <li className="hidden md:flex"><a className=" duration-300 hover:text-stone-600" href="/science">Science</a></li>
          <li><a className=" duration-300 hover:text-stone-600" href="/sports">Sports</a></li>
          <li className="hidden sm:flex"><a className=" duration-300 hover:text-stone-600" href="/technology">Technology</a></li>
        </ul>
        <div>
        <div className=" h-1 bg-[#111] mb-0.5"></div>
        <div className=" h-0.5 bg-[#111]"></div>
        </div>
    </div>
  )
}

export default Navbar