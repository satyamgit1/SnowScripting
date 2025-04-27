


// import { useState } from 'react';
// import { ChevronDownIcon, DownloadIcon } from '@heroicons/react/outline';

// export default function NoteEditor({ initialData, onSave }) {
//   const [formData, setFormData] = useState(initialData || {
//     title: '',
//     content: '',
//     scriptType: 'business_rule',
//     project: '',
//     tags: []
//   });
//   const [showDownloadMenu, setShowDownloadMenu] = useState(false);
//   const [showSavedPopup, setShowSavedPopup] = useState(false);

//   const scriptTypes = [
//     'business_rule',
//     'script_include',
//     'client_script',
//     'scheduled_job',
//     'ui_action',
//     'email_template',
//     'ui_script',
//     'widget'
//   ];

//   const handleDownload = (format = 'txt') => {
//     if (!formData.content) return;

//     let content, extension;
    
//     switch(format) {
//       case 'json':
//         content = JSON.stringify({
//           title: formData.title,
//           content: formData.content,
//           type: formData.scriptType,
//           project: formData.project,
//           tags: formData.tags,
//           created: new Date().toISOString()
//         }, null, 2);
//         extension = 'json';
//         break;
//       case 'xml':
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
//   <metadata>
//     <title>${formData.title}</title>
//     <type>${formData.scriptType}</type>
//     <project>${formData.project}</project>
//     <created>${new Date().toISOString()}</created>
//   </metadata>
//   <content><![CDATA[${formData.content}]]></content>
// </servicenow-script>`;
//         extension = 'xml';
//         break;
//       default: // txt
//         content = formData.content;
//         extension = 'txt';
//     }

//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${formData.title.replace(/[^\w]/g, '_')}_${formData.scriptType}.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const handleSave = () => {
//     onSave(formData);
//     setShowSavedPopup(true);

//     // Close the popup after 3 seconds
//     setTimeout(() => {
//       setShowSavedPopup(false);
//     }, 1000);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-start">
//         <div>
//           {/* <h2 className="text-2xl font-bold text-black">
//             {initialData ? 'Edit Script' : 'Create New Script'}
//           </h2> */}
//           <p className="text-sm text-gray-600 mt-1">
//             {initialData ? 'Update your existing script' : 'Create a new ServiceNow script'}
//           </p>
//         </div>

//         {formData.content && (
//           <div className="relative">
//             <button
//               onClick={() => setShowDownloadMenu(!showDownloadMenu)}
//               className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
//             >
//               <DownloadIcon className="h-5 w-5 mr-2" />
//               Download
//               <ChevronDownIcon className="h-4 w-4 ml-2" />
//             </button>

//             {showDownloadMenu && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
//                 <div className="py-1">
//                   <button
//                     onClick={() => {
//                       handleDownload('txt');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📄</span> Text (.txt)
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleDownload('json');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📊</span> JSON (.json)
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleDownload('xml');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📋</span> XML (.xml)
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleSave();
//       }} className="space-y-6">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-black">
//               Script Title *
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({...formData, title: e.target.value})}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
//               required
//               placeholder="e.g., Incident Priority Business Rule"
//             />
//           </div>

//           <div>
//             <label htmlFor="scriptType" className="block text-sm font-medium text-black">
//               Script Type *
//             </label>
//             <select
//               id="scriptType"
//               value={formData.scriptType}
//               onChange={(e) => setFormData({...formData, scriptType: e.target.value})}
//               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
//               required
//             >
//               {scriptTypes.map(type => (
//                 <option key={type} value={type}>
//                   {type.replace(/_/g, ' ').toUpperCase()}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label htmlFor="project" className="block text-sm font-medium text-black">
//             Project Name
//           </label>
//           <input
//             id="project"
//             type="text"
//             value={formData.project}
//             onChange={(e) => setFormData({...formData, project: e.target.value})}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
//             placeholder="e.g., HR Service Portal Implementation"
//           />
//         </div>

//         <div>
//           <label htmlFor="content" className="block text-sm font-medium text-black">
//             Script Content *
//           </label>
//           <textarea
//             id="content"
//             rows={15}
//             value={formData.content}
//             onChange={(e) => setFormData({...formData, content: e.target.value})}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 font-mono text-sm"
//             required
//             placeholder="Paste your script here..."
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//           >
//             {initialData ? 'Update Script' : 'Save Script'}
//           </button>
//         </div>
//       </form>

//       {showSavedPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-20">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72">
//             <div role="alert" className="alert alert-success">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current text-green-500" fill="none" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-black">Your script has been saved successfully!</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from 'react';
// import { ChevronDownIcon, DownloadIcon } from '@heroicons/react/outline';

// export default function NoteEditor({ initialData, onSave }) {
//   const [formData, setFormData] = useState(initialData || {
//     title: '',
//     content: '',
//     scriptType: 'business_rule',
//     project: '',
//     tags: []
//   });
//   const [showDownloadMenu, setShowDownloadMenu] = useState(false);
//   const [showSavedPopup, setShowSavedPopup] = useState(false);

//   const scriptTypes = [
//     'business_rule',
//     'script_include',
//     'client_script',
//     'scheduled_job',
//     'ui_action',
//     'email_template',
//     'ui_script',
//     'widget'
//   ];

//   const handleDownload = (format = 'txt') => {
//     if (!formData.content) return;

//     let content, extension;
    
//     switch(format) {
//       case 'json':
//         content = JSON.stringify({
//           title: formData.title,
//           content: formData.content,
//           type: formData.scriptType,
//           project: formData.project,
//           tags: formData.tags,
//           created: new Date().toISOString()
//         }, null, 2);
//         extension = 'json';
//         break;
//       case 'xml':
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
//   <metadata>
//     <title>${formData.title}</title>
//     <type>${formData.scriptType}</type>
//     <project>${formData.project}</project>
//     <created>${new Date().toISOString()}</created>
//   </metadata>
//   <content><![CDATA[${formData.content}]]></content>
// </servicenow-script>`;
//         extension = 'xml';
//         break;
//       default: // txt
//         content = formData.content;
//         extension = 'txt';
//     }

//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${formData.title.replace(/[^\w]/g, '_')}_${formData.scriptType}.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const handleSave = () => {
//     onSave(formData);
//     setShowSavedPopup(true);

//     // Close the popup after 3 seconds
//     setTimeout(() => {
//       setShowSavedPopup(false);
//     }, 1000);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-start">
//         <div>
//           {/* <h2 className="text-2xl font-bold text-black">
//             {initialData ? 'Edit Script' : 'Create New Script'}
//           </h2> */}
//           <p className="text-sm text-gray-600 mt-1">
//             {initialData ? 'Update your existing script' : 'Create a new ServiceNow script'}
//           </p>
//         </div>

//         {formData.content && (
//           <div className="relative">
//             <button
//               onClick={() => setShowDownloadMenu(!showDownloadMenu)}
//               className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
//             >
//               <DownloadIcon className="h-5 w-5 mr-2" />
//               Download
//               <ChevronDownIcon className="h-4 w-4 ml-2" />
//             </button>

//             {showDownloadMenu && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
//                 <div className="py-1">
//                   <button
//                     onClick={() => {
//                       handleDownload('txt');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📄</span> Text (.txt)
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleDownload('json');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📊</span> JSON (.json)
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleDownload('xml');
//                       setShowDownloadMenu(false);
//                     }}
//                     className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <span className="mr-2">📋</span> XML (.xml)
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleSave();
//       }} className="space-y-6">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-black">
//               Script Title *
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black"
//               required
//               placeholder="e.g., Incident Priority Business Rule"
//             />
//           </div>

//           <div>
//             <label htmlFor="scriptType" className="block text-sm font-medium text-black">
//               Script Type *
//             </label>
//             <select
//               id="scriptType"
//               value={formData.scriptType}
//               onChange={(e) => setFormData({ ...formData, scriptType: e.target.value })}
//               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md text-black"
//               required
//             >
//               {scriptTypes.map(type => (
//                 <option key={type} value={type}>
//                   {type.replace(/_/g, ' ').toUpperCase()}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label htmlFor="project" className="block text-sm font-medium text-black">
//             Project Name
//           </label>
//           <input
//             id="project"
//             type="text"
//             value={formData.project}
//             onChange={(e) => setFormData({ ...formData, project: e.target.value })}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black"
//             placeholder="e.g., HR Service Portal Implementation"
//           />
//         </div>

//         <div>
//           <label htmlFor="content" className="block text-sm font-medium text-black">
//             Script Content *
//           </label>
//           <textarea
//             id="content"
//             rows={15}
//             value={formData.content}
//             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 font-mono text-sm text-black"
//             required
//             placeholder="Paste your script here..."
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//           >
//             {initialData ? 'Update Script' : 'Save Script'}
//           </button>
//         </div>
//       </form>

//       {showSavedPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-20">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72">
//             <div role="alert" className="alert alert-success">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current text-green-500" fill="none" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-black">Your script has been saved successfully!</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from 'react';
import { ChevronDownIcon, DownloadIcon, SaveIcon, XIcon } from '@heroicons/react/outline';
import { FiCode, FiFileText, FiDatabase, FiTag, FiFolder } from 'react-icons/fi';

export default function NoteEditor({ initialData, onSave }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    content: '',
    scriptType: 'business_rule',
    project: '',
    tags: []
  });
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showSavedPopup, setShowSavedPopup] = useState(false);

  const scriptTypes = [
    'business_rule',
    'script_include',
    'client_script',
    'scheduled_job',
    'ui_action',
    'email_template',
    'ui_script',
    'widget'
  ];

  const handleDownload = (format = 'txt') => {
    if (!formData.content) return;

    let content, extension;
    
    switch(format) {
      case 'json':
        content = JSON.stringify({
          title: formData.title,
          content: formData.content,
          type: formData.scriptType,
          project: formData.project,
          tags: formData.tags,
          created: new Date().toISOString()
        }, null, 2);
        extension = 'json';
        break;
      case 'xml':
        content = `<?xml version="1.0" encoding="UTF-8"?>
<servicenow-script>
  <metadata>
    <title>${formData.title}</title>
    <type>${formData.scriptType}</type>
    <project>${formData.project}</project>
    <created>${new Date().toISOString()}</created>
  </metadata>
  <content><![CDATA[${formData.content}]]></content>
</servicenow-script>`;
        extension = 'xml';
        break;
      default: // txt
        content = formData.content;
        extension = 'txt';
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.title.replace(/[^\w]/g, '_')}_${formData.scriptType}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    onSave(formData);
    setShowSavedPopup(true);
    setTimeout(() => {
      setShowSavedPopup(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-6 border-b border-orange-200">
        <div>
          {/* <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <FiCode className="text-orange-500 mr-2" />
            {initialData ? 'Edit Script' : 'Create New Script'}
          </h2> */}
          <p className="text-sm text-gray-500 mt-1">
            {initialData ? 'Update your existing script' : 'Start writing your ServiceNow script'}
          </p>
        </div>

        {formData.content && (
          <div className="relative">
            <button
              onClick={() => setShowDownloadMenu(!showDownloadMenu)}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Export
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            </button>

            {showDownloadMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-10 border border-orange-100 overflow-hidden">
                <div className="py-1">
                  <button
                    onClick={() => {
                      handleDownload('txt');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 items-center transition-colors"
                  >
                    <FiFileText className="text-orange-500 mr-3" />
                    <div>
                      <div className="font-medium">Text File</div>
                      <div className="text-xs text-gray-500">.txt format</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      handleDownload('json');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 items-center transition-colors"
                  >
                    <FiDatabase className="text-orange-500 mr-3" />
                    <div>
                      <div className="font-medium">JSON File</div>
                      <div className="text-xs text-gray-500">.json format</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      handleDownload('xml');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 items-center transition-colors"
                  >
                    <FiCode className="text-orange-500 mr-3" />
                    <div>
                      <div className="font-medium">XML File</div>
                      <div className="text-xs text-gray-500">.xml format</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Form Section */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Title Field */}
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FiFileText className="text-orange-500 mr-2" />
              Script Title *
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              required
              placeholder="e.g., Incident Priority Business Rule"
            />
          </div>

          {/* Script Type Field */}
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <label htmlFor="scriptType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FiCode className="text-orange-500 mr-2" />
              Script Type *
            </label>
            <div className="relative">
              <select
                id="scriptType"
                value={formData.scriptType}
                onChange={(e) => setFormData({ ...formData, scriptType: e.target.value })}
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none transition-all"
                required
              >
                {scriptTypes.map(type => (
                  <option key={type} value={type}>
                    {type.replace(/_/g, ' ').toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Field */}
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
          <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <FiFolder className="text-orange-500 mr-2" />
            Project Name
          </label>
          <input
            id="project"
            type="text"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
            placeholder="e.g., HR Service Portal Implementation"
          />
        </div>

        {/* Tags Field - Placeholder for future implementation */}
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <FiTag className="text-orange-500 mr-2" />
            Tags (Coming Soon)
          </label>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white text-sm rounded-full border border-gray-300 text-gray-500">
              Add tags to organize your scripts
            </span>
          </div>
        </div>

        {/* Content Field */}
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <FiCode className="text-orange-500 mr-2" />
            Script Content *
          </label>
          <textarea
            id="content"
            rows={15}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono text-sm transition-all"
            required
            placeholder="// Paste your script here...\n// Business Rule example:\n\nfunction onChange(control, oldValue, newValue, isLoading) {\n    if (isLoading || newValue === '') {\n        return;\n    }\n    \n    // Your logic here\n}"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4 border-t border-orange-200">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center px-5 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
          >
            <XIcon className="h-4 w-4 mr-2" />
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
          >
            <SaveIcon className="h-4 w-4 mr-2" />
            {initialData ? 'Update Script' : 'Save Script'}
          </button>
        </div>
      </form>

      {/* Save Confirmation Popup */}
      {showSavedPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-green-200 animate-pop-in">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Script Saved!</h3>
                <p className="text-sm text-gray-500">Your changes have been successfully saved.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
