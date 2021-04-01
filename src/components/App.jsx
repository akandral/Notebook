
//import './App.css';
import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notesdb'

// newNote(entry)=>{
//   return (
//     <Note
//       title={entry.title}
//       content={entry.content}
//     />
//   )
// }
function App(){
  return (
    <div>
      <Header />
      {notes.map(entry=>(
          <Note
            key={entry.key}
            title={entry.title}
            content={entry.content}
          />
        )// returning Note
    )}
      <Footer />
    </div>
  );
};

export default App;
