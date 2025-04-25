// import { useState } from 'react'

// export default function NoteEditor({ onSave }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     scriptType: 'business_rule',
//     project: '',
//     tags: []
//   })

//   const scriptTypes = [
//     'business_rule',
//     'script_include',
//     'client_script',
//     'scheduled_job',
//     'ui_action',
//     'email_template',
//     'ui_script',
//     'widget'
//   ]

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSave(formData)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Title</label>
//         <input
//           type="text"
//           value={formData.title}
//           onChange={(e) => setFormData({...formData, title: e.target.value})}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Script Type</label>
//         <select
//           value={formData.scriptType}
//           onChange={(e) => setFormData({...formData, scriptType: e.target.value})}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         >
//           {scriptTypes.map(type => (
//             <option key={type} value={type}>
//               {type.replace(/_/g, ' ').toUpperCase()}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Script Content</label>
//         <textarea
//           value={formData.content}
//           onChange={(e) => setFormData({...formData, content: e.target.value})}
//           rows={15}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-mono text-sm"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//       >
//         Save Script
//       </button>
//     </form>
//   )
// }


// import { useState } from 'react'

// export default function NoteEditor({ initialData, onSave }) {
//   const [formData, setFormData] = useState(initialData || {
//     title: '',
//     content: '',
//     scriptType: 'business_rule',
//     project: '',
//     tags: []
//   })

//   const scriptTypes = [
//     'business_rule',
//     'script_include',
//     'client_script',
//     'scheduled_job',
//     'ui_action',
//     'email_template',
//     'ui_script',
//     'widget'
//   ]

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSave(formData)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//         <input
//           type="text"
//           value={formData.title}
//           onChange={(e) => setFormData({...formData, title: e.target.value})}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           required
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Script Type</label>
//           <select
//             value={formData.scriptType}
//             onChange={(e) => setFormData({...formData, scriptType: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {scriptTypes.map(type => (
//               <option key={type} value={type}>
//                 {type.replace(/_/g, ' ').toUpperCase()}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
//           <input
//             type="text"
//             value={formData.project}
//             onChange={(e) => setFormData({...formData, project: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Script Content</label>
//         <textarea
//           value={formData.content}
//           onChange={(e) => setFormData({...formData, content: e.target.value})}
//           rows={15}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
//           required
//         />
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Save Changes
//         </button>
//       </div>
//     </form>
//   )
// }


import { useState } from 'react';
import { ChevronDownIcon, DownloadIcon } from '@heroicons/react/outline';

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

    // Close the popup after 3 seconds
    setTimeout(() => {
      setShowSavedPopup(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          {/* <h2 className="text-2xl font-bold text-black">
            {initialData ? 'Edit Script' : 'Create New Script'}
          </h2> */}
          <p className="text-sm text-gray-600 mt-1">
            {initialData ? 'Update your existing script' : 'Create a new ServiceNow script'}
          </p>
        </div>

        {formData.content && (
          <div className="relative">
            <button
              onClick={() => setShowDownloadMenu(!showDownloadMenu)}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            </button>

            {showDownloadMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    onClick={() => {
                      handleDownload('txt');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span className="mr-2">📄</span> Text (.txt)
                  </button>
                  <button
                    onClick={() => {
                      handleDownload('json');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span className="mr-2">📊</span> JSON (.json)
                  </button>
                  <button
                    onClick={() => {
                      handleDownload('xml');
                      setShowDownloadMenu(false);
                    }}
                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span className="mr-2">📋</span> XML (.xml)
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-black">
              Script Title *
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
              placeholder="e.g., Incident Priority Business Rule"
            />
          </div>

          <div>
            <label htmlFor="scriptType" className="block text-sm font-medium text-black">
              Script Type *
            </label>
            <select
              id="scriptType"
              value={formData.scriptType}
              onChange={(e) => setFormData({...formData, scriptType: e.target.value})}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              required
            >
              {scriptTypes.map(type => (
                <option key={type} value={type}>
                  {type.replace(/_/g, ' ').toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-black">
            Project Name
          </label>
          <input
            id="project"
            type="text"
            value={formData.project}
            onChange={(e) => setFormData({...formData, project: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g., HR Service Portal Implementation"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-black">
            Script Content *
          </label>
          <textarea
            id="content"
            rows={15}
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 font-mono text-sm"
            required
            placeholder="Paste your script here..."
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {initialData ? 'Update Script' : 'Save Script'}
          </button>
        </div>
      </form>

      {showSavedPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72">
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current text-green-500" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-black">Your script has been saved successfully!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
