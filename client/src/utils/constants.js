// SignUp
export const inValidPasswordText = {
  length: 'Please enter 8~12 characters.',
  engNum: 'Enter uppercase and lowercase letters',
  char: 'Include number and special chars',
  misMatch: 'Passwords do not match',
};

// Post (Quill)
export const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ['clean'],
  ],
};

export const formats = [
  //'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
];

// Select Field Modal
export const fields = [
  { id: 1, title: 'Server/Back-end' },
  { id: 2, title: 'Front-end' },
  { id: 3, title: 'Web Full-stack' },
  { id: 4, title: 'Android' },
  { id: 5, title: 'IOS' },
  { id: 6, title: 'Machine-Learning' },
  { id: 7, title: 'Mobile Game' },
  { id: 8, title: 'Data-Engineering' },
  { id: 9, title: 'Game-Client' },
  { id: 10, title: 'Game-Server' },
  { id: 11, title: 'System/NetWork' },
  { id: 12, title: 'System Software' },
  { id: 13, title: 'Security' },
  { id: 14, title: 'IoT' },
  { id: 15, title: 'Block Chain' },
];

// Select Language

export const options = [
  { value: 'Python', label: 'Python' },
  { value: 'Django', label: 'Django' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'React', label: 'React' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Java', label: 'Java' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'C#', label: 'C#' },
];
