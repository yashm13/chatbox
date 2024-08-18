export default function Button(props) {
    return (
      <button 
        onClick={props.onClick}
        className="focus:outline-none hover:bg-red-200 font-bold bg-[#674188] w-20 text-white py-2 px-4 rounded"
      >
        {props.name}
      </button>
    );
  }
  