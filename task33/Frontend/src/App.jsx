import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([
  ])
  console.log("helloo");

  function fetchnotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes)
      })
  }
  useEffect(() => {
    fetchnotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })

      .then(res => {
        console.log(res.data);
        fetchnotes()

      })

  }

  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId)
      .then(res => {
        console.log(res.data);
        fetchnotes()

      })

  }

  function handleEdittedNote(e, noteId) {
    e.preventDefault()
    const description = e.target.elements.description.value
    console.log(description.value);

    axios.patch("http://localhost:3000/api/notes/" + noteId, {
      description: description
    })

      .then(res => {
        console.log(res.data);
        fetchnotes()

      })

  }



  return (
    <>

      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => { handleDeleteNote(note._id) }}>delete</button>
              <br />
              <form className='editted desription' onSubmit={(e) => { handleEdittedNote(e, note._id) }}>
                <input name='description' type="text" placeholder='edit description' />
                <button>Submit</button>
              </form>
            </div>
          })
        }
      </div>

    </>
  )
}

export default App
