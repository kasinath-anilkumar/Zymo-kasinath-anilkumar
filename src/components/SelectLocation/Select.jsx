import React from "react";
import { useLocationContext } from "../../Context/Location"; // Assuming you are using this from context

const Select = () => {
  const { setLocation } = useLocationContext(); // Access setLocation from the context

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="text-center p-10 bg-yellow-200 rounded-md shadow-lg">
          <p>Please select a location</p>
          <div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setLocation("Mumbai")}
            >
              Change to Mumbai
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
