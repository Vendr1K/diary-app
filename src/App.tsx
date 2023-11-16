import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { Layout, Main } from './components/UI'

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <NoteList />
      </Main>
    </Layout>
  )
}

export default App
