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


import { useState } from 'react'

export default function NoteEditor({ initialData, onSave }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    content: '',
    scriptType: 'business_rule',
    project: '',
    tags: []
  })

  const scriptTypes = [
    'business_rule',
    'script_include',
    'client_script',
    'scheduled_job',
    'ui_action',
    'email_template',
    'ui_script',
    'widget'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Script Type</label>
          <select
            value={formData.scriptType}
            onChange={(e) => setFormData({...formData, scriptType: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {scriptTypes.map(type => (
              <option key={type} value={type}>
                {type.replace(/_/g, ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
          <input
            type="text"
            value={formData.project}
            onChange={(e) => setFormData({...formData, project: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Script Content</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          rows={15}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}