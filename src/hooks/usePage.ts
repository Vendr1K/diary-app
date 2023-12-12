import { useContext } from 'react'
import { PageContext } from '../context'

export const usePage = () => {
  return useContext(PageContext)
}
