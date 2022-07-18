import { useState } from 'react';

// const Modal = ({ url, onClose }) => {
//   return (
//     <div>
//       <p>Modal</p>
//       <p>URL: {url}</p>
//       <button type="button" onClick={() => onClose(null)}>
//         Close
//       </button>
//     </div>
//   );
// };

// const List = ({ items, onSelect }) => {
//   return (
//     <div>
//       {items.map(item => (
//         <ListItem key={item.large} item={item} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// };

// const ListItem = ({ item, onSelect }) => {
//   return <div onClick={() => onSelect(item.large)}>{item.large} </div>;
// };

// export const App = () => {
//   const [images, setImages] = useState([
//     { src: 'prew1', large: 'large1' },
//     { src: 'prew2', large: 'large2' },
//     { src: 'prew3', large: 'large3' },
//   ]);

//   const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//   return (
//     <div>
//       <List items={images} onSelect={setSelectedImageUrl} />
//       {selectedImageUrl && (
//         <Modal url={selectedImageUrl} onClose={setSelectedImageUrl} />
//       )}
//     </div>
//   );
// };
// ////////////// VARIANT 2 ////////////////////////////////////////
const Modal = ({ url, onClose }) => {
  return (
    <div>
      <p>Modal</p>
      <p>URL: {url}</p>
      <button type="button" onClick={() => onClose(null)}>
        Close
      </button>
    </div>
  );
};

const List = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.large} item={item} />
      ))}
    </div>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>{item.large} </div>
      {isModalOpen && (
        <Modal url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export const App = () => {
  const [images, setImages] = useState([
    { src: 'prew1', large: 'large1' },
    { src: 'prew2', large: 'large2' },
    { src: 'prew3', large: 'large3' },
  ]);

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  return (
    <div>
      <List items={images} onSelect={setSelectedImageUrl} />
    </div>
  );
};
