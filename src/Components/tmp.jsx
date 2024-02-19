const [combinedData, setCombinedData] = useState([
  {
    type: "todo",
    id: 1,
    isChecked: false,
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    type: "detailedNote",
    id: 1,
    title: "Some title",
    brief: "Some brief description",
    details:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    type: "detailedNote",
    id: 2,
    title: "Some title",
    brief: "Some brief description",
    details:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
]);
const [combinedData, setCombinedData] = useState(
  localStorage.getItem("myData")
    ? JSON.parse(localStorage.getItem("myData"))
    : [],
);
const handleNewTodo = () => {
  setCombinedData((prevCombinedData) => [
    ...prevCombinedData,
    {
      type: "todo",
      id: combinedData.length,
      isChecked: false,
      content:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
  ]);
};

const handleNewNote = () => {
  setCombinedData((prevCombinedData) => [
    ...prevCombinedData,
    {
      type: "detailedNote",
      id: combinedData.length,
      title: "",
      brief: "",
      details: " ",
    },
  ]);
  setSelectedId(combinedData.length);
  setModal(!modal);
};
