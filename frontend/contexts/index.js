import { createContext } from 'react'

import { RootStore } from '../stores'

const rootStore = new RootStore()

const { userStore, watchListStore } = rootStore

export const storeContext = createContext({ userStore, watchListStore })
