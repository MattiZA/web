import {
  ApplicationSetupOptions,
  Extension,
  useStore,
  useRouter,
  useSearch,
  useFileActionsShowShares,
  useFileActionsCopyQuickLink
} from '@ownclouders/web-pkg'
import { computed, unref } from 'vue'
import { SDKSearch } from './search'
import { useSideBarPanels } from './composables/extensions/useFileSideBars'
import { useFolderViews } from './composables/extensions/useFolderViews'

export const extensions = ({ applicationConfig }: ApplicationSetupOptions) => {
  const store = useStore()
  const router = useRouter()
  const { search: searchFunction } = useSearch()

  const { actions: showSharesActions } = useFileActionsShowShares()
  const { actions: quickLinkActions } = useFileActionsCopyQuickLink()

  const panels = useSideBarPanels()
  const folderViews = useFolderViews()

  return computed(
    () =>
      [
        ...unref(folderViews),
        ...unref(panels),
        {
          id: 'com.github.owncloud.web.files.search',
          type: 'search',
          searchProvider: new SDKSearch(store, router, searchFunction)
        },
        {
          id: 'com.github.owncloud.web.files.quick-action.collaborator',
          scopes: ['resource', 'resource.quick-action'],
          type: 'action',
          action: unref(showSharesActions)[0]
        },
        {
          id: 'com.github.owncloud.web.files.quick-action.quicklink',
          scopes: ['resource', 'resource.quick-action'],
          type: 'action',
          action: unref(quickLinkActions)[0]
        }
      ] satisfies Extension[]
  )
}
