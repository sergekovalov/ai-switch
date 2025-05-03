import { atom, useAtom } from 'jotai'
import { Pages } from '@/types/pages.enum'

export const PageAtom = atom<Pages>(Pages.DASHBOARD)

export const usePage = (): [Pages, (Pages) => void] => useAtom(PageAtom)
