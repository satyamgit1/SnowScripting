

// import { useState, useRef, useEffect } from "react";
// import {
//   ChevronDownIcon,
//   DownloadIcon,
//   SaveIcon,
//   XIcon,
//   ShareIcon,
// } from "@heroicons/react/outline";
// import {
//   FiCode,
//   FiFileText,
//   FiDatabase,
//   FiTag,
//   FiFolder,
// } from "react-icons/fi";
// import { useAuth } from "../../services/auth";
// import Editor from "@monaco-editor/react";
// import { motion, AnimatePresence } from "framer-motion";

// // ADD projectList prop (see usage below)
// export default function NoteEditor({ initialData, onSave, projectList = [] }) {
//   const { user } = useAuth();
//   const [formData, setFormData] = useState(
//     initialData || {
//       title: "",
//       content: "",
//       scriptType: "business_rule",
//       scriptSubType: "before",
//       project: "",
//       tags: [],
//     }
//   );
//   const [showDownloadMenu, setShowDownloadMenu] = useState(false);
//   const [showSavedPopup, setShowSavedPopup] = useState(false);
//   const [editorTheme, setEditorTheme] = useState("vs-dark");
//   const [isHoveringSave, setIsHoveringSave] = useState(false);
//   const editorRef = useRef(null);
//   const monacoRef = useRef(null);

//   const [projectError, setProjectError] = useState(null); // <-- NEW: for duplicate project names

//   const scriptTypes = [
//     "business_rule",
//     "script_include",
//     "client_script",
//     "scheduled_job",
//     "ui_action",
//     "email_template",
//     "ui_script",
//     "widget",
//     "fix_script",
//     "email_script",
//     "background_script",
//   ];

//   const scriptSubTypes = {
//     business_rule: [
//       { value: "before", label: "Before" },
//       { value: "after", label: "After" },
//       { value: "async_after", label: "Async" },
//       { value: "display", label: "Display" },
//     ],
//     client_script: [
//       { value: "onLoad", label: "OnLoad" },
//       { value: "onChange", label: "OnChange" },
//       { value: "onSubmit", label: "OnSubmit" },
//       { value: "onCellEdit", label: "OnCellEdit" },
//     ],
//     script_include: [],
//     scheduled_job: [],
//     ui_action: [],
//     email_template: [],
//     ui_script: [],
//     widget: [],
//     fix_script: [],
//     email_script: [],
//     background_script: [],
//   };

//   const getScriptSuggestions = () => {
//     if (!monacoRef.current) return [];
//     return [
//       {
//         label: "function onChange()",
//         kind: monacoRef.current.languages.CompletionItemKind.Function,
//         documentation: "OnChange client script function",
//         insertText:
//           "function onChange(control, oldValue, newValue, isLoading) {\n\t${1}\n}",
//       },
//       {
//         label: "function onSubmit()",
//         kind: monacoRef.current.languages.CompletionItemKind.Function,
//         documentation: "OnSubmit client script function",
//         insertText: "function onSubmit() {\n\t${1}\n}",
//       },
//       {
//         label: "function onLoad()",
//         kind: monacoRef.current.languages.CompletionItemKind.Function,
//         documentation: "OnLoad client script function",
//         insertText: "function onLoad() {\n\t${1}\n}",
//       },
//       {
//         label: "gs",
//         kind: monacoRef.current.languages.CompletionItemKind.Variable,
//         documentation: "GlideSystem (gs) API",
//         insertText: "gs",
//       },
//       {
//         label: "current",
//         kind: monacoRef.current.languages.CompletionItemKind.Variable,
//         documentation: "Current GlideRecord",
//         insertText: "current",
//       },
//       {
//         label: "previous",
//         kind: monacoRef.current.languages.CompletionItemKind.Variable,
//         documentation: "Previous GlideRecord",
//         insertText: "previous",
//       },
//       {
//         label: "GlideRecord",
//         kind: monacoRef.current.languages.CompletionItemKind.Class,
//         documentation: "GlideRecord constructor",
//         insertText: "new GlideRecord('${1:table_name}')",
//       },
//       {
//         label: "gs.addInfoMessage()",
//         kind: monacoRef.current.languages.CompletionItemKind.Method,
//         documentation: "Add info message",
//         insertText: "gs.addInfoMessage('${1:message}')",
//       },
//       {
//         label: "gs.log()",
//         kind: monacoRef.current.languages.CompletionItemKind.Method,
//         documentation: "Log message to system log",
//         insertText: "gs.log('${1:message}')",
//       },
//       {
//         label: "current.getValue()",
//         kind: monacoRef.current.languages.CompletionItemKind.Method,
//         documentation: "Get field value",
//         insertText: "current.getValue('${1:field_name}')",
//       },
//       {
//         label: "if",
//         kind: monacoRef.current.languages.CompletionItemKind.Keyword,
//         documentation: "If statement",
//         insertText: "if (${1:condition}) {\n\t${2}\n}",
//       },
//       {
//         label: "for",
//         kind: monacoRef.current.languages.CompletionItemKind.Keyword,
//         documentation: "For loop",
//         insertText:
//           "for (var ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3}\n}",
//       },
//       {
//         label: "while",
//         kind: monacoRef.current.languages.CompletionItemKind.Keyword,
//         documentation: "While loop",
//         insertText: "while (${1:condition}) {\n\t${2}\n}",
//       },
//       {
//         label: "//",
//         kind: monacoRef.current.languages.CompletionItemKind.Snippet,
//         documentation: "Single line comment",
//         insertText: "// ${1}",
//       },
//       {
//         label: "/* */",
//         kind: monacoRef.current.languages.CompletionItemKind.Snippet,
//         documentation: "Multi-line comment",
//         insertText: "/*\n * ${1}\n */",
//       },
//     ];
//   };

//   const handleEditorDidMount = (editor, monaco) => {
//     editorRef.current = editor;
//     monacoRef.current = monaco;

//     editor.updateOptions({
//       minimap: { enabled: true },
//       scrollBeyondLastLine: false,
//       fontSize: 14,
//       wordWrap: "on",
//       automaticLayout: true,
//       suggestOnTriggerCharacters: true,
//       quickSuggestions: true,
//       parameterHints: { enabled: true },
//       formatOnPaste: true,
//       formatOnType: true,
//       renderWhitespace: "selection",
//       tabSize: 2,
//       insertSpaces: true,
//       autoIndent: "full",
//       folding: true,
//       lineNumbers: "on",
//       glyphMargin: true,
//       scrollbar: {
//         vertical: "auto",
//         horizontal: "auto",
//       },
//       fontLigatures: true,
//       bracketPairColorization: { enabled: true },
//     });

//     editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
//       document.getElementById("save-button").click();
//     });
//     editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyB, () => {
//       const selection = editor.getSelection();
//       const text = editor.getModel().getValueInRange(selection);
//       editor.executeEdits("", [
//         {
//           range: selection,
//           text: `**${text}**`,
//           forceMoveMarkers: true,
//         },
//       ]);
//     });

//     monaco.languages.registerCompletionItemProvider("javascript", {
//       provideCompletionItems: (model, position) => {
//         const suggestions = getScriptSuggestions();
//         return { suggestions };
//       },
//       triggerCharacters: [".", "("],
//     });

//     editor.addAction({
//       id: "format-bold",
//       label: "Format Bold",
//       contextMenuGroupId: "formatting",
//       contextMenuOrder: 1,
//       run: () => {
//         const selection = editor.getSelection();
//         const text = editor.getModel().getValueInRange(selection);
//         editor.executeEdits("", [
//           {
//             range: selection,
//             text: `**${text}**`,
//             forceMoveMarkers: true,
//           },
//         ]);
//       },
//     });
//   };

//   const handleEditorChange = (value) => {
//     setFormData({ ...formData, content: value });
//   };

//   const handleDownload = (format = "txt") => {
//     if (!formData.content) return;

//     let content, extension;

//     switch (format) {
//       case "json":
//         content = JSON.stringify(
//           {
//             title: formData.title,
//             content: formData.content,
//             type: formData.scriptType,
//             subType: formData.scriptSubType,
//             project: formData.project,
//             tags: formData.tags,
//             created: new Date().toISOString(),
//           },
//           null,
//           2
//         );
//         extension = "json";
//         break;
//       case "xml":
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
// <metadata>
// <title>${formData.title}</title>
// <type>${formData.scriptType}</type>
// ${formData.scriptSubType ? `<subtype>${formData.scriptSubType}</subtype>` : ""}
// <project>${formData.project}</project>
// <created>${new Date().toISOString()}</created>
// </metadata>
// <content><![CDATA[${formData.content}]]></content>
// </servicenow-script>`;
//         extension = "xml";
//         break;
//       default: // txt
//         content = formData.content;
//         extension = "txt";
//     }

//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${formData.title.replace(/[^\w]/g, "_")}_${
//       formData.scriptType
//     }.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const handleShareViaEmail = () => {
//     const subject = `ServiceNow Script: ${formData.title}`;
//     const body = `Here's the ServiceNow script you requested:

// Script Title: ${formData.title}
// Script Type: ${formData.scriptType.replace(/_/g, " ").toUpperCase()}
// ${
//   formData.scriptSubType
//     ? `Script Sub-Type: ${formData.scriptSubType
//         .replace(/_/g, " ")
//         .toUpperCase()}\n`
//     : ""
// }
// ${formData.project ? `Project: ${formData.project}` : ""}

// Script Content:
// ${formData.content}

// ---
// Sent from ServiceNow Script Manager`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   };

//   const handleScriptTypeChange = (e) => {
//     const newType = e.target.value;
//     setFormData({
//       ...formData,
//       scriptType: newType,
//       scriptSubType:
//         scriptSubTypes[newType]?.length > 0
//           ? scriptSubTypes[newType][0].value
//           : "",
//     });
//   };

//   const getEditorLanguage = () => {
//     switch (formData.scriptType) {
//       case "business_rule":
//       case "script_include":
//       case "client_script":
//       case "scheduled_job":
//       case "ui_action":
//       case "ui_script":
//       case "fix_script":
//       case "background_script":
//         return "javascript";
//       case "email_template":
//       case "email_script":
//         return "html";
//       default:
//         return "plaintext";
//     }
//   };

//   // Duplicate project name checking logic
//   function isDuplicateProjectName(name) {
//     if (!name?.trim()) return false;
//     const nameLower = name.trim().toLowerCase();
//     return projectList.some(
//       (proj) =>
//         proj &&
//         proj.trim().toLowerCase() === nameLower &&
//         (!initialData ||
//           initialData.project?.trim().toLowerCase() !== nameLower)
//     );
//   }

//   useEffect(() => {
//     if (formData.project) {
//       if (isDuplicateProjectName(formData.project)) {
//         setProjectError("A project with this name already exists.");
//       } else {
//         setProjectError(null);
//       }
//     } else {
//       setProjectError(null);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData.project, projectList, initialData]);

//   // Floating particles effect for the header
//   const FloatingParticles = () => {
//     const particles = Array.from({ length: 15 }, (_, i) => {
//       const size = Math.random() * 5 + 2;
//       return {
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size,
//         duration: Math.random() * 10 + 10,
//         delay: Math.random() * 5,
//         opacity: Math.random() * 0.5 + 0.3,
//       };
//     });

//     return (
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-green-400"
//             style={{
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//             }}
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [particle.opacity, 0],
//               y: [0, -50],
//               x: [0, (Math.random() - 0.5) * 30],
//             }}
//             transition={{
//               duration: particle.duration,
//               delay: particle.delay,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-6 bg-gray-900 p-6 rounded-2xl shadow-lg relative overflow-hidden border border-gray-800">
//       {/* Floating background elements */}
//       <motion.div
//         className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-900 to-green-900 opacity-30 blur-xl"
//         animate={{
//           x: [0, 10, 0],
//           y: [0, 10, 0],
//           rotate: [0, 5, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-green-900 to-emerald-900 opacity-30 blur-xl"
//         animate={{
//           x: [0, -10, 0],
//           y: [0, -10, 0],
//           rotate: [0, -5, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       />

//       {/* Header Section */}
//       <motion.div
//         className="flex justify-between items-center pb-6 border-b border-emerald-800 relative"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <FloatingParticles />
//         <div className="relative z-10">
//           <motion.h1
//             className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500"
//             whileHover={{ scale: 1.02 }}
//           >
//             {initialData ? "Edit Script" : "New ServiceNow Script"}
//           </motion.h1>
//           <motion.p
//             className="text-sm text-gray-400 mt-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             {initialData
//               ? "Update your existing script"
//               : "Start writing your ServiceNow script"}
//           </motion.p>
//         </div>

//         {formData.content && (
//           <motion.div className="relative" whileHover={{ scale: 1.05 }}>
//             <motion.button
//               onClick={() => setShowDownloadMenu(!showDownloadMenu)}
//               className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg group relative overflow-hidden"
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 initial={{ x: "-100%" }}
//                 animate={{ x: showDownloadMenu ? "0%" : "-100%" }}
//                 transition={{ duration: 0.5 }}
//               />
//               <DownloadIcon className="h-5 w-5 mr-2 group-hover:animate-bounce relative z-10" />
//               <span className="relative z-10">Export</span>
//               <ChevronDownIcon className="h-4 w-4 ml-2 transition-transform duration-200 relative z-10" />
//             </motion.button>

//             <AnimatePresence>
//               {showDownloadMenu && (
//                 <motion.div
//                   className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-10 border border-emerald-900 overflow-hidden"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <div className="py-1">
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("txt");
//                         setShowDownloadMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiFileText className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">Text File</div>
//                         <div className="text-xs text-gray-400">.txt format</div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("json");
//                         setShowDownloadMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiDatabase className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">JSON File</div>
//                         <div className="text-xs text-gray-400">
//                           .json format
//                         </div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("xml");
//                         setShowDownloadMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiCode className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">XML File</div>
//                         <div className="text-xs text-gray-400">.xml format</div>
//                       </div>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Form Section */}
//       <motion.form
//         onSubmit={(e) => {
//           e.preventDefault();
//           if (projectError) return; // <-- Prevent save if duplicate
//           onSave(formData);
//           setShowSavedPopup(true);
//           setTimeout(() => setShowSavedPopup(false), 1000);
//         }}
//         className="space-y-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           {/* Title Field */}
//           <motion.div
//             className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//             whileHover={{ y: -2 }}
//           >
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
//             >
//               <FiFileText className="text-emerald-400 mr-2" />
//               Script Title *
//             </label>
//             <motion.input
//               id="title"
//               type="text"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({ ...formData, title: e.target.value })
//               }
//               className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm text-white placeholder-gray-400"
//               required
//               placeholder="e.g., Incident Priority Business Rule"
//               whileFocus={{ scale: 1.01 }}
//             />
//           </motion.div>
//           {/* Script Type Field */}
//           <motion.div
//             className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//             whileHover={{ y: -2 }}
//           >
//             <label
//               htmlFor="scriptType"
//               className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
//             >
//               <FiCode className="text-emerald-400 mr-2" />
//               Script Type *
//             </label>
//             <div className="relative">
//               <motion.select
//                 id="scriptType"
//                 value={formData.scriptType}
//                 onChange={handleScriptTypeChange}
//                 className="block w-full pl-10 pr-10 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none transition-all shadow-sm text-white"
//                 required
//                 whileFocus={{ scale: 1.01 }}
//               >
//                 {scriptTypes.map((type) => (
//                   <option key={type} value={type} className="bg-gray-800">
//                     {type.replace(/_/g, " ").toUpperCase()}
//                   </option>
//                 ))}
//               </motion.select>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <ChevronDownIcon className="h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Script Sub-Type Field */}
//         {scriptSubTypes[formData.scriptType]?.length > 0 && (
//           <motion.div
//             className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             transition={{ duration: 0.3 }}
//             whileHover={{ y: -2 }}
//           >
//             <label
//               htmlFor="scriptSubType"
//               className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
//             >
//               <FiCode className="text-emerald-400 mr-2" />
//               {formData.scriptType.replace(/_/g, " ").toUpperCase()} Type *
//             </label>
//             <div className="relative">
//               <motion.select
//                 id="scriptSubType"
//                 value={formData.scriptSubType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, scriptSubType: e.target.value })
//                 }
//                 className="block w-full pl-10 pr-10 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none transition-all shadow-sm text-white"
//                 required
//                 whileFocus={{ scale: 1.01 }}
//               >
//                 {scriptSubTypes[formData.scriptType].map((subType) => (
//                   <option
//                     key={subType.value}
//                     value={subType.value}
//                     className="bg-gray-800"
//                   >
//                     {subType.label}
//                   </option>
//                 ))}
//               </motion.select>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <ChevronDownIcon className="h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Project Field */}
//         <motion.div
//           className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//           whileHover={{ y: -2 }}
//         >
//           <label
//             htmlFor="project"
//             className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
//           >
//             <FiFolder className="text-emerald-400 mr-2" />
//             Project Name
//           </label>
//           <motion.input
//             id="project"
//             type="text"
//             value={formData.project}
//             onChange={(e) =>
//               setFormData({ ...formData, project: e.target.value })
//             }
//             className={`block w-full pl-10 pr-3 py-2 border ${
//               projectError ? "border-red-500" : "border-gray-700"
//             } rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm text-white placeholder-gray-400`}
//             placeholder="e.g., HR Service Portal Implementation"
//             whileFocus={{ scale: 1.01 }}
//           />
//           {projectError && (
//             <div className="mt-2 text-sm text-red-400">{projectError}</div>
//           )}
//         </motion.div>

//         {/* Content Field */}
//         <motion.div
//           className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//           whileHover={{ y: -2 }}
//         >
//           <div className="flex justify-between items-center mb-2">
//             <label
//               htmlFor="content"
//               className="block text-sm font-medium text-gray-300 flex items-center"
//             >
//               <FiCode className="text-emerald-400 mr-2" />
//               Script Content *
//             </label>
//             <div className="flex items-center space-x-2">
//               <motion.select
//                 value={editorTheme}
//                 onChange={(e) => setEditorTheme(e.target.value)}
//                 className="text-xs border border-gray-700 rounded px-2 py-1 bg-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-white"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <option value="vs-dark">Dark Theme</option>
//                 <option value="vs-light">Light Theme</option>
//                 <option value="hc-black">High Contrast</option>
//               </motion.select>
//             </div>
//           </div>
//           <motion.div
//             className="border border-gray-700 rounded-lg overflow-hidden shadow-inner"
//             whileHover={{ scale: 1.005 }}
//           >
//             <Editor
//               height="400px"
//               language={getEditorLanguage()}
//               theme={editorTheme}
//               value={formData.content}
//               onChange={handleEditorChange}
//               onMount={handleEditorDidMount}
//               options={{
//                 minimap: { enabled: true },
//                 scrollBeyondLastLine: false,
//                 fontSize: 14,
//                 wordWrap: "on",
//                 automaticLayout: true,
//                 suggestOnTriggerCharacters: true,
//                 quickSuggestions: true,
//                 parameterHints: { enabled: true },
//                 formatOnPaste: true,
//                 formatOnType: true,
//                 renderWhitespace: "selection",
//                 tabSize: 2,
//                 insertSpaces: true,
//                 autoIndent: "full",
//                 folding: true,
//                 lineNumbers: "on",
//                 glyphMargin: true,
//                 scrollbar: {
//                   vertical: "auto",
//                   horizontal: "auto",
//                 },
//                 fontLigatures: true,
//                 bracketPairColorization: { enabled: true },
//                 guides: { indentation: true },
//                 hover: { enabled: true },
//                 lightbulb: { enabled: true },
//                 matchBrackets: "always",
//                 occurrencesHighlight: true,
//                 renderControlCharacters: true,
//                 renderFinalNewline: true,
//                 renderLineHighlight: "all",
//                 renderValidationDecorations: "on",
//                 roundedSelection: true,
//                 rulers: [],
//                 selectionClipboard: true,
//                 selectionHighlight: true,
//                 showFoldingControls: "mouseover",
//                 showUnused: true,
//                 smoothScrolling: true,
//                 snippetSuggestions: "top",
//                 stickyScroll: { enabled: true },
//                 suggestSelection: "first",
//                 wordBasedSuggestions: true,
//                 wordSeparators: "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
//                 wordWrapBreakAfterCharacters: "\t})]?|&,;",
//                 wordWrapBreakBeforeCharacters: "{([+=",
//                 wrappingIndent: "same",
//               }}
//             />
//           </motion.div>
//           <motion.div
//             className="mt-2 text-xs text-gray-400 flex items-center"
//             whileHover={{ scale: 1.01 }}
//           >
//             <motion.span
//               className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-900 text-emerald-300 mr-2"
//               animate={{
//                 rotate: [0, 5, -5, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatDelay: 5,
//               }}
//             >
//               Pro Tip
//             </motion.span>
//             <p>
//               Use <strong className="text-emerald-300">Ctrl+B</strong> to bold
//               selected text or right-click for formatting options
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Action Buttons */}
//         <motion.div
//           className="flex justify-end space-x-4 pt-4 border-t border-emerald-800"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <motion.button
//             type="button"
//             onClick={() => window.history.back()}
//             className="flex items-center px-5 py-2.5 border border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:shadow-md"
//             whileHover={{ x: -3 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <XIcon className="h-4 w-4 mr-2" />
//             Cancel
//           </motion.button>
//           <motion.button
//             id="save-button"
//             type="submit"
//             className="flex items-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:shadow-md relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onHoverStart={() => setIsHoveringSave(true)}
//             onHoverEnd={() => setIsHoveringSave(false)}
//             disabled={!!projectError}
//             style={{
//               opacity: projectError ? 0.6 : 1,
//               cursor: projectError ? "not-allowed" : "pointer",
//             }}
//           >
//             <AnimatePresence>
//               {isHoveringSave && (
//                 <motion.span
//                   className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700"
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{ duration: 0.5 }}
//                 />
//               )}
//             </AnimatePresence>
//             <SaveIcon className="h-4 w-4 mr-2 relative z-10" />
//             <span className="relative z-10">
//               {initialData ? "Update Script" : "Save Script"}
//             </span>
//           </motion.button>
//         </motion.div>
//       </motion.form>

//       {/* Share Button */}
//       <motion.div
//         className="flex justify-end"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <motion.button
//           type="button"
//           onClick={handleShareViaEmail}
//           className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg relative overflow-hidden"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "linear",
//             }}
//           />
//           <ShareIcon className="h-5 w-5 mr-2 relative z-10" />
//           <span className="relative z-10">Share via Email</span>
//         </motion.button>
//       </motion.div>

//       {/* Save Confirmation Popup */}
//       <AnimatePresence>
//         {showSavedPopup && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-emerald-800"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <div className="flex items-center">
//                 <motion.div
//                   className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, ease: "backOut" }}
//                 >
//                   <svg
//                     className="h-6 w-6 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </motion.div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">
//                     Script Saved!
//                   </h3>
//                   <p className="text-sm text-gray-400">
//                     Your changes have been successfully saved.
//                   </p>
//                 </div>
//               </div>
//               <motion.div
//                 className="mt-4 h-1 bg-gradient-to-r from-emerald-900 to-green-900 rounded-full overflow-hidden"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 1, delay: 0.3 }}
//               >
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }












import { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  DownloadIcon,
  SaveIcon,
  XIcon,
  ShareIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import {
  FiCode,
  FiFileText,
  FiDatabase,
  FiTag,
  FiFolder,
  FiCopy,
} from "react-icons/fi";
import { useAuth } from "../../services/auth";
import Editor from "@monaco-editor/react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceNowAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 500 });
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);

  const panelRef = useRef(null);
  const resizeHandleRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target === resizeHandleRef.current) {
      setIsResizing(true);
      return;
    }
    
    if (e.target.closest('input, button, a')) {
      return;
    }
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = Math.max(300, e.clientX - position.x);
      const newHeight = Math.max(300, e.clientY - position.y);
      setDimensions({
        width: newWidth,
        height: newHeight
      });
      return;
    }
    
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, position]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    
    const userMessage = { role: 'user', content: query, timestamp: new Date().toISOString() };
    setResponses(prev => [...prev, userMessage]);
    setQuery('');

    try {
      const response = await fetch('/api/ask-servicenow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question: query,
          model: 'glm-4.5',
          temperature: 0.7
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI assistant');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Request was not successful');
      }

      const aiMessage = { 
        role: 'ai', 
        content: data.answer || data.message,
        timestamp: new Date().toISOString()
      };
      setResponses(prev => [...prev, aiMessage]);
      
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to get response');
      
      setResponses(prev => prev.filter((msg, index) => 
        index !== prev.length - 1 || msg.role !== 'user'
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearConversation = () => {
    setResponses([]);
    setError(null);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderContent = (content) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: content.substring(lastIndex, match.index)
        });
      }
      
      parts.push({
        type: 'code',
        language: match[1] || 'javascript',
        content: match[2]
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex)
      });
    }
    
    return parts.map((part, i) => {
      if (part.type === 'code') {
        return (
          <div key={i} className="my-2 bg-gray-900 p-3 rounded-lg overflow-x-auto">
            <div className="text-xs text-gray-400 mb-1">{part.language || 'code'}</div>
            <pre className="text-sm font-mono text-gray-200 whitespace-pre-wrap">
              {part.content}
            </pre>
          </div>
        );
      } else {
        return (
          <span key={i} className="whitespace-pre-wrap">
            {part.content}
          </span>
        );
      }
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg shadow-lg hover:from-emerald-600 hover:to-green-700 transition-all"
      >
        <ChatAlt2Icon className="h-5 w-5 mr-2" />
        AI Assistant
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            className="fixed z-50 bg-gray-800 rounded-xl shadow-2xl border border-emerald-800 overflow-hidden flex flex-col"
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              left: `${position.x}px`,
              top: `${position.y}px`,
              cursor: isDragging ? 'grabbing' : 'default'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseDown={handleMouseDown}
          >
            <div 
              className="bg-gradient-to-r from-emerald-800 to-green-900 p-3 flex justify-between items-center cursor-move"
              onMouseDown={handleMouseDown}
            >
              <h3 className="text-white font-medium flex items-center">
                <ChatAlt2Icon className="h-5 w-5 mr-2" />
                ServiceNow AI Assistant
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearConversation}
                  className="text-gray-300 hover:text-white p-1"
                  title="Clear conversation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white p-1"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {responses.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <p>Ask me anything about ServiceNow scripting!</p>
                  <div className="mt-4 text-sm space-y-2 text-left">
                    <p className="text-emerald-400">Try asking:</p>
                    <p>- "How do I query records with GlideRecord?"</p>
                    <p>- "Show me a business rule example"</p>
                    <p>- "Explain client scripts in ServiceNow"</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {responses.map((item, index) => (
                    <div key={`${item.timestamp}-${index}`} className="space-y-2">
                      <div className={`p-3 rounded-lg relative ${
                        item.role === 'user' 
                          ? 'bg-gray-700 text-white ml-8' 
                          : 'bg-emerald-900/30 text-gray-200 border border-emerald-800 mr-8'
                      }`}>
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-semibold">
                            {item.role === 'user' ? 'You' : 'AI Assistant'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {formatTime(item.timestamp)}
                          </div>
                        </div>
                        {renderContent(item.content)}
                      </div>
                      {item.role === 'ai' && (
                        <div className="flex justify-end pr-8">
                          <button
                            onClick={() => handleCopy(item.content, index)}
                            className="text-xs text-gray-400 hover:text-emerald-400 flex items-center"
                          >
                            {copiedIndex === index ? (
                              <span className="text-emerald-400 flex items-center">
                                <FiCopy className="mr-1" /> Copied!
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <FiCopy className="mr-1" /> Copy
                              </span>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {isLoading && (
                <div className="flex justify-center py-4">
                  <div className="animate-pulse flex space-x-2 items-center">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
              {error && (
                <div className="p-3 rounded-lg bg-red-900/20 border border-red-800 text-red-300 text-sm">
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={!query.trim() || isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </form>

            <div
              ref={resizeHandleRef}
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-emerald-600"
              onMouseDown={handleMouseDown}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function NoteEditor({ initialData, onSave, projectList = [] }) {
  const { user } = useAuth();
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      content: "",
      scriptType: "business_rule",
      scriptSubType: "before",
      project: "",
      tags: [],
    }
  );
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showSavedPopup, setShowSavedPopup] = useState(false);
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [isHoveringSave, setIsHoveringSave] = useState(false);
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const [projectError, setProjectError] = useState(null);

  const scriptTypes = [
    "business_rule",
    "script_include",
    "client_script",
    "scheduled_job",
    "ui_action",
    "email_template",
    "ui_script",
    "widget",
    "fix_script",
    "email_script",
    "background_script",
  ];

  const scriptSubTypes = {
    business_rule: [
      { value: "before", label: "Before" },
      { value: "after", label: "After" },
      { value: "async_after", label: "Async" },
      { value: "display", label: "Display" },
    ],
    client_script: [
      { value: "onLoad", label: "OnLoad" },
      { value: "onChange", label: "OnChange" },
      { value: "onSubmit", label: "OnSubmit" },
      { value: "onCellEdit", label: "OnCellEdit" },
    ],
    script_include: [],
    scheduled_job: [],
    ui_action: [],
    email_template: [],
    ui_script: [],
    widget: [],
    fix_script: [],
    email_script: [],
    background_script: [],
  };

  const getScriptSuggestions = () => {
    if (!monacoRef.current) return [];
    return [
      {
        label: "function onChange()",
        kind: monacoRef.current.languages.CompletionItemKind.Function,
        documentation: "OnChange client script function",
        insertText:
          "function onChange(control, oldValue, newValue, isLoading) {\n\t${1}\n}",
      },
      {
        label: "function onSubmit()",
        kind: monacoRef.current.languages.CompletionItemKind.Function,
        documentation: "OnSubmit client script function",
        insertText: "function onSubmit() {\n\t${1}\n}",
      },
      {
        label: "function onLoad()",
        kind: monacoRef.current.languages.CompletionItemKind.Function,
        documentation: "OnLoad client script function",
        insertText: "function onLoad() {\n\t${1}\n}",
      },
      {
        label: "gs",
        kind: monacoRef.current.languages.CompletionItemKind.Variable,
        documentation: "GlideSystem (gs) API",
        insertText: "gs",
      },
      {
        label: "current",
        kind: monacoRef.current.languages.CompletionItemKind.Variable,
        documentation: "Current GlideRecord",
        insertText: "current",
      },
      {
        label: "previous",
        kind: monacoRef.current.languages.CompletionItemKind.Variable,
        documentation: "Previous GlideRecord",
        insertText: "previous",
      },
      {
        label: "GlideRecord",
        kind: monacoRef.current.languages.CompletionItemKind.Class,
        documentation: "GlideRecord constructor",
        insertText: "new GlideRecord('${1:table_name}')",
      },
      {
        label: "gs.addInfoMessage()",
        kind: monacoRef.current.languages.CompletionItemKind.Method,
        documentation: "Add info message",
        insertText: "gs.addInfoMessage('${1:message}')",
      },
      {
        label: "gs.log()",
        kind: monacoRef.current.languages.CompletionItemKind.Method,
        documentation: "Log message to system log",
        insertText: "gs.log('${1:message}')",
      },
      {
        label: "current.getValue()",
        kind: monacoRef.current.languages.CompletionItemKind.Method,
        documentation: "Get field value",
        insertText: "current.getValue('${1:field_name}')",
      },
      {
        label: "if",
        kind: monacoRef.current.languages.CompletionItemKind.Keyword,
        documentation: "If statement",
        insertText: "if (${1:condition}) {\n\t${2}\n}",
      },
      {
        label: "for",
        kind: monacoRef.current.languages.CompletionItemKind.Keyword,
        documentation: "For loop",
        insertText:
          "for (var ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3}\n}",
      },
      {
        label: "while",
        kind: monacoRef.current.languages.CompletionItemKind.Keyword,
        documentation: "While loop",
        insertText: "while (${1:condition}) {\n\t${2}\n}",
      },
      {
        label: "//",
        kind: monacoRef.current.languages.CompletionItemKind.Snippet,
        documentation: "Single line comment",
        insertText: "// ${1}",
      },
      {
        label: "/* */",
        kind: monacoRef.current.languages.CompletionItemKind.Snippet,
        documentation: "Multi-line comment",
        insertText: "/*\n * ${1}\n */",
      },
    ];
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.updateOptions({
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      fontSize: 14,
      wordWrap: "on",
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      quickSuggestions: true,
      parameterHints: { enabled: true },
      formatOnPaste: true,
      formatOnType: true,
      renderWhitespace: "selection",
      tabSize: 2,
      insertSpaces: true,
      autoIndent: "full",
      folding: true,
      lineNumbers: "on",
      glyphMargin: true,
      scrollbar: {
        vertical: "auto",
        horizontal: "auto",
      },
      fontLigatures: true,
      bracketPairColorization: { enabled: true },
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      document.getElementById("save-button").click();
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyB, () => {
      const selection = editor.getSelection();
      const text = editor.getModel().getValueInRange(selection);
      editor.executeEdits("", [
        {
          range: selection,
          text: `**${text}**`,
          forceMoveMarkers: true,
        },
      ]);
    });

    monaco.languages.registerCompletionItemProvider("javascript", {
      provideCompletionItems: (model, position) => {
        const suggestions = getScriptSuggestions();
        return { suggestions };
      },
      triggerCharacters: [".", "("],
    });

    editor.addAction({
      id: "format-bold",
      label: "Format Bold",
      contextMenuGroupId: "formatting",
      contextMenuOrder: 1,
      run: () => {
        const selection = editor.getSelection();
        const text = editor.getModel().getValueInRange(selection);
        editor.executeEdits("", [
          {
            range: selection,
            text: `**${text}**`,
            forceMoveMarkers: true,
          },
        ]);
      },
    });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleDownload = (format = "txt") => {
    if (!formData.content) return;

    let content, extension;

    switch (format) {
      case "json":
        content = JSON.stringify(
          {
            title: formData.title,
            content: formData.content,
            type: formData.scriptType,
            subType: formData.scriptSubType,
            project: formData.project,
            tags: formData.tags,
            created: new Date().toISOString(),
          },
          null,
          2
        );
        extension = "json";
        break;
      case "xml":
        content = `<?xml version="1.0" encoding="UTF-8"?>
<servicenow-script>
<metadata>
<title>${formData.title}</title>
<type>${formData.scriptType}</type>
${formData.scriptSubType ? `<subtype>${formData.scriptSubType}</subtype>` : ""}
<project>${formData.project}</project>
<created>${new Date().toISOString()}</created>
</metadata>
<content><![CDATA[${formData.content}]]></content>
</servicenow-script>`;
        extension = "xml";
        break;
      default: // txt
        content = formData.content;
        extension = "txt";
    }

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.title.replace(/[^\w]/g, "_")}_${
      formData.scriptType
    }.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareViaEmail = () => {
    const subject = `ServiceNow Script: ${formData.title}`;
    const body = `Here's the ServiceNow script you requested:

Script Title: ${formData.title}
Script Type: ${formData.scriptType.replace(/_/g, " ").toUpperCase()}
${
  formData.scriptSubType
    ? `Script Sub-Type: ${formData.scriptSubType
        .replace(/_/g, " ")
        .toUpperCase()}\n`
    : ""
}
${formData.project ? `Project: ${formData.project}` : ""}

Script Content:
${formData.content}

---
Sent from ServiceNow Script Manager`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleScriptTypeChange = (e) => {
    const newType = e.target.value;
    setFormData({
      ...formData,
      scriptType: newType,
      scriptSubType:
        scriptSubTypes[newType]?.length > 0
          ? scriptSubTypes[newType][0].value
          : "",
    });
  };

  const getEditorLanguage = () => {
    switch (formData.scriptType) {
      case "business_rule":
      case "script_include":
      case "client_script":
      case "scheduled_job":
      case "ui_action":
      case "ui_script":
      case "fix_script":
      case "background_script":
        return "javascript";
      case "email_template":
      case "email_script":
        return "html";
      default:
        return "plaintext";
    }
  };

  function isDuplicateProjectName(name) {
    if (!name?.trim()) return false;
    const nameLower = name.trim().toLowerCase();
    return projectList.some(
      (proj) =>
        proj &&
        proj.trim().toLowerCase() === nameLower &&
        (!initialData ||
          initialData.project?.trim().toLowerCase() !== nameLower)
    );
  }

  useEffect(() => {
    if (formData.project) {
      if (isDuplicateProjectName(formData.project)) {
        setProjectError("A project with this name already exists.");
      } else {
        setProjectError(null);
      }
    } else {
      setProjectError(null);
    }
  }, [formData.project, projectList, initialData]);

  const FloatingParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => {
      const size = Math.random() * 5 + 2;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      };
    });

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-green-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [particle.opacity, 0],
              y: [0, -50],
              x: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ServiceNowAIAssistant />
      <div className="space-y-6 bg-gray-900 p-6 rounded-2xl shadow-lg relative overflow-hidden border border-gray-800">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-900 to-green-900 opacity-30 blur-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-green-900 to-emerald-900 opacity-30 blur-xl"
          animate={{
            x: [0, -10, 0],
            y: [0, -10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="flex justify-between items-center pb-6 border-b border-emerald-800 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FloatingParticles />
          <div className="relative z-10">
            <motion.h1
              className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500"
              whileHover={{ scale: 1.02 }}
            >
              {initialData ? "Edit Script" : "New ServiceNow Script"}
            </motion.h1>
            <motion.p
              className="text-sm text-gray-400 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {initialData
                ? "Update your existing script"
                : "Start writing your ServiceNow script"}
            </motion.p>
          </div>

          {formData.content && (
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <motion.button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg group relative overflow-hidden"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  animate={{ x: showDownloadMenu ? "0%" : "-100%" }}
                  transition={{ duration: 0.5 }}
                />
                <DownloadIcon className="h-5 w-5 mr-2 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Export</span>
                <ChevronDownIcon className="h-4 w-4 ml-2 transition-transform duration-200 relative z-10" />
              </motion.button>

              <AnimatePresence>
                {showDownloadMenu && (
                  <motion.div
                    className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-10 border border-emerald-900 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      <motion.button
                        onClick={() => {
                          handleDownload("txt");
                          setShowDownloadMenu(false);
                        }}
                        className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <FiFileText className="text-emerald-400 mr-3" />
                        <div>
                          <div className="font-medium">Text File</div>
                          <div className="text-xs text-gray-400">.txt format</div>
                        </div>
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          handleDownload("json");
                          setShowDownloadMenu(false);
                        }}
                        className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <FiDatabase className="text-emerald-400 mr-3" />
                        <div>
                          <div className="font-medium">JSON File</div>
                          <div className="text-xs text-gray-400">
                            .json format
                          </div>
                        </div>
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          handleDownload("xml");
                          setShowDownloadMenu(false);
                        }}
                        className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <FiCode className="text-emerald-400 mr-3" />
                        <div>
                          <div className="font-medium">XML File</div>
                          <div className="text-xs text-gray-400">.xml format</div>
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            if (projectError) return;
            onSave(formData);
            setShowSavedPopup(true);
            setTimeout(() => setShowSavedPopup(false), 1000);
          }}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -2 }}
            >
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
              >
                <FiFileText className="text-emerald-400 mr-2" />
                Script Title *
              </label>
              <motion.input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm text-white placeholder-gray-400"
                required
                placeholder="e.g., Incident Priority Business Rule"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>
            <motion.div
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -2 }}
            >
              <label
                htmlFor="scriptType"
                className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
              >
                <FiCode className="text-emerald-400 mr-2" />
                Script Type *
              </label>
              <div className="relative">
                <motion.select
                  id="scriptType"
                  value={formData.scriptType}
                  onChange={handleScriptTypeChange}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none transition-all shadow-sm text-white"
                  required
                  whileFocus={{ scale: 1.01 }}
                >
                  {scriptTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">
                      {type.replace(/_/g, " ").toUpperCase()}
                    </option>
                  ))}
                </motion.select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {scriptSubTypes[formData.scriptType]?.length > 0 && (
            <motion.div
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -2 }}
            >
              <label
                htmlFor="scriptSubType"
                className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
              >
                <FiCode className="text-emerald-400 mr-2" />
                {formData.scriptType.replace(/_/g, " ").toUpperCase()} Type *
              </label>
              <div className="relative">
                <motion.select
                  id="scriptSubType"
                  value={formData.scriptSubType}
                  onChange={(e) =>
                    setFormData({ ...formData, scriptSubType: e.target.value })
                  }
                  className="block w-full pl-10 pr-10 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none transition-all shadow-sm text-white"
                  required
                  whileFocus={{ scale: 1.01 }}
                >
                  {scriptSubTypes[formData.scriptType].map((subType) => (
                    <option
                      key={subType.value}
                      value={subType.value}
                      className="bg-gray-800"
                    >
                      {subType.label}
                    </option>
                  ))}
                </motion.select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -2 }}
          >
            <label
              htmlFor="project"
              className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
            >
              <FiFolder className="text-emerald-400 mr-2" />
              Project Name
            </label>
            <motion.input
              id="project"
              type="text"
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              className={`block w-full pl-10 pr-3 py-2 border ${
                projectError ? "border-red-500" : "border-gray-700"
              } rounded-lg bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm text-white placeholder-gray-400`}
              placeholder="e.g., HR Service Portal Implementation"
              whileFocus={{ scale: 1.01 }}
            />
            {projectError && (
              <div className="mt-2 text-sm text-red-400">{projectError}</div>
            )}
          </motion.div>

          <motion.div
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-300 flex items-center"
              >
                <FiCode className="text-emerald-400 mr-2" />
                Script Content *
              </label>
              <div className="flex items-center space-x-2">
                <motion.select
                  value={editorTheme}
                  onChange={(e) => setEditorTheme(e.target.value)}
                  className="text-xs border border-gray-700 rounded px-2 py-1 bg-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <option value="vs-dark">Dark Theme</option>
                  <option value="vs-light">Light Theme</option>
                  <option value="hc-black">High Contrast</option>
                </motion.select>
              </div>
            </div>
            <motion.div
              className="border border-gray-700 rounded-lg overflow-hidden shadow-inner"
              whileHover={{ scale: 1.005 }}
            >
              <Editor
                height="400px"
                language={getEditorLanguage()}
                theme={editorTheme}
                value={formData.content}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                  wordWrap: "on",
                  automaticLayout: true,
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: true,
                  parameterHints: { enabled: true },
                  formatOnPaste: true,
                  formatOnType: true,
                  renderWhitespace: "selection",
                  tabSize: 2,
                  insertSpaces: true,
                  autoIndent: "full",
                  folding: true,
                  lineNumbers: "on",
                  glyphMargin: true,
                  scrollbar: {
                    vertical: "auto",
                    horizontal: "auto",
                  },
                  fontLigatures: true,
                  bracketPairColorization: { enabled: true },
                  guides: { indentation: true },
                  hover: { enabled: true },
                  lightbulb: { enabled: true },
                  matchBrackets: "always",
                  occurrencesHighlight: true,
                  renderControlCharacters: true,
                  renderFinalNewline: true,
                  renderLineHighlight: "all",
                  renderValidationDecorations: "on",
                  roundedSelection: true,
                  rulers: [],
                  selectionClipboard: true,
                  selectionHighlight: true,
                  showFoldingControls: "mouseover",
                  showUnused: true,
                  smoothScrolling: true,
                  snippetSuggestions: "top",
                  stickyScroll: { enabled: true },
                  suggestSelection: "first",
                  wordBasedSuggestions: true,
                  wordSeparators: "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
                  wordWrapBreakAfterCharacters: "\t})]?|&,;",
                  wordWrapBreakBeforeCharacters: "{([+=",
                  wrappingIndent: "same",
                }}
              />
            </motion.div>
            <motion.div
              className="mt-2 text-xs text-gray-400 flex items-center"
              whileHover={{ scale: 1.01 }}
            >
              <motion.span
                className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-900 text-emerald-300 mr-2"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                Pro Tip
              </motion.span>
              <p>
                Use <strong className="text-emerald-300">Ctrl+B</strong> to bold
                selected text or right-click for formatting options
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-end space-x-4 pt-4 border-t border-emerald-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              type="button"
              onClick={() => window.history.back()}
              className="flex items-center px-5 py-2.5 border border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:shadow-md"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <XIcon className="h-4 w-4 mr-2" />
              Cancel
            </motion.button>
            <motion.button
              id="save-button"
              type="submit"
              className="flex items-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:shadow-md relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveringSave(true)}
              onHoverEnd={() => setIsHoveringSave(false)}
              disabled={!!projectError}
              style={{
                opacity: projectError ? 0.6 : 1,
                cursor: projectError ? "not-allowed" : "pointer",
              }}
            >
              <AnimatePresence>
                {isHoveringSave && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
              <SaveIcon className="h-4 w-4 mr-2 relative z-10" />
              <span className="relative z-10">
                {initialData ? "Update Script" : "Save Script"}
              </span>
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            type="button"
            onClick={handleShareViaEmail}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <ShareIcon className="h-5 w-5 mr-2 relative z-10" />
            <span className="relative z-10">Share via Email</span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showSavedPopup && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-emerald-800"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center">
                  <motion.div
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "backOut" }}
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Script Saved!
                    </h3>
                    <p className="text-sm text-gray-400">
                      Your changes have been successfully saved.
                    </p>
                  </div>
                </div>
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-emerald-900 to-green-900 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};