const Plancard = (props) => {
  const {active,setActive} = props;
  const setCardActive = ()=>{
      setActive()
  }
  return (
    <div
      className={`w-72 rounded-2xl ml-4 mt-6 pt-4  shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer ${active ? 'bg-blue-200 m-4 ml-6 mt-8 scale-110': ''}`}
      style={{ height: "530px", border:"1px solid rgba(128, 128, 128, 0.7)" }}
      onClick={setCardActive}
    >
      <div
        className=" w-64 h-20 ml-4 rounded-xl text-white"
        style={{
          background:
            "radial-gradient(145.76% 131.96% at 100% 100%, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)",
        }}
      >
        <div className=" p-4 font-medium">
          <p className=" font-semibold">Premium</p>
          <p>4K + HDR</p>
        </div>
      </div>
      <div className="py-4 font-medium border-b-2 border-gray-300 ml-6" style={{width:"80%",borderBottom:"1px solid rgba(128, 128, 128, 0.4)"}} >
        <p className=" font-semibold text-gray-500">Monthly Price</p>
        <p className="text-gray-600">649</p>
      </div>
      <div className="py-4 font-medium border-b-2 border-gray-300 ml-6" style={{width:"80%",borderBottom:"1px solid rgba(128, 128, 128, 0.4)"}} >
        <p className=" font-semibold text-gray-500">Video and sound quality</p>
        <p className="text-gray-600">Best</p>
      </div>
      <div className="py-4 font-medium border-b-2 border-gray-300 ml-6" style={{width:"80%",borderBottom:"1px solid rgba(128, 128, 128, 0.4)"}} >
        <p className=" font-semibold text-gray-500">Resolution</p>
        <p className="text-gray-600">4K (Ultra HD) + HDR</p>
      </div>
      <div className="py-4 font-medium border-b-2 border-gray-300 ml-6" style={{width:"80%",borderBottom:"1px solid rgba(128, 128, 128, 0.4)"}} >
        <p className=" font-semibold text-gray-500">Supported devices</p>
        <p className="text-gray-600">TV, computer, mobile phone, tablet</p>
      </div>
      <div className="py-4 font-medium ml-6" style={{width:"80%"}} >
        <p className=" font-semibold text-gray-500">Download devices</p>
        <p className="text-gray-600">6</p>
      </div>
    </div>
  );
};

export default Plancard;
