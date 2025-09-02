
// export default function Modal({ isOpen, onClose, onConfirm, title, message }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose} // Close modal if clicked outside
//     >
//       <div
//         className="bg-white p-6 rounded-lg max-w-md w-full"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         <h3 className="text-lg font-bold mb-2">{title}</h3>
//         <p className="mb-4">{message}</p>
//         <div className="flex justify-end space-x-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { motion, AnimatePresence } from "framer-motion";
import { XIcon, ExclamationIcon } from "@heroicons/react/outline";

export default function Modal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = "Confirm", 
  confirmColor = "red" 
}) {
  if (!isOpen) return null;

  // Determine button color based on confirmColor prop
  const getButtonClass = () => {
    switch (confirmColor) {
      case "red":
        return "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700";
      case "green":
        return "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700";
      case "blue":
        return "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700";
      default:
        return "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0  bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 opacity-10 blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 opacity-10 blur-xl"></div>
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700 flex justify-between items-center relative z-10">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    confirmColor === "red" ? "bg-red-900/30" : 
                    confirmColor === "green" ? "bg-emerald-900/30" : 
                    "bg-blue-900/30"
                  }`}>
                    <ExclamationIcon className={`h-6 w-6 ${
                      confirmColor === "red" ? "text-red-400" : 
                      confirmColor === "green" ? "text-emerald-400" : 
                      "text-blue-400"
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 relative z-10">
                <p className="text-gray-300 mb-6">{message}</p>
                
                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors font-medium"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onConfirm}
                    className={`px-4 py-2 rounded-lg text-white font-medium shadow-lg ${getButtonClass()}`}
                  >
                    {confirmText}
                  </motion.button>
                </div>
              </div>
              
              {/* Bottom accent line with animation */}
              <motion.div 
                className={`h-1 ${
                  confirmColor === "red" ? "bg-gradient-to-r from-red-500 to-red-600" : 
                  confirmColor === "green" ? "bg-gradient-to-r from-emerald-500 to-green-600" : 
                  "bg-gradient-to-r from-blue-500 to-indigo-600"
                }`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}