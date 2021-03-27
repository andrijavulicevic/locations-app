const Spinner = () => (
  <div
    className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
  >
    <div
      className="animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 h-40 w-40 mx-auto relative top-1/2"
      style={{
        borderBottomColor: 'rgb(96, 165, 250)',
      }}
    />
  </div>
);

export default Spinner;
