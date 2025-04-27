import { Pages } from 'src/renderer/types/pages.enum'
import { atom, useAtom } from 'jotai'

export const PageAtom = atom<Pages>(Pages.DASHBOARD)

export const usePage = (): [Pages, (Pages) => void] => useAtom(PageAtom)
