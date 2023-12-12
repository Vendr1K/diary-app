import { NoteList, AddNote, Header } from './components'
import { Layout, Main } from './components/UI'
import { usePage } from './hooks/usePage'

function App() {
  const { isNotesOpen } = usePage()

  return (
    <Layout>
      <Header />
      <Main>{isNotesOpen ? <AddNote /> : <NoteList />}</Main>
    </Layout>
  )
}

export default App
