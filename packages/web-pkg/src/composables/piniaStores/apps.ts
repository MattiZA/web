import { defineStore } from 'pinia'
import { computed, ref, unref } from 'vue'
import {
  AppConfigObject,
  ApplicationFileEditor,
  ApplicationInformation,
  ApplicationInformationExtension,
  ApplicationNewFileHandler
} from '../../apps'

export const useAppsStore = defineStore('apps', () => {
  const apps = ref<Record<string, ApplicationInformation>>({})
  const newFileHandlers = ref<ApplicationNewFileHandler[]>([])
  const fileEditors = ref<ApplicationFileEditor[]>([])
  const externalAppConfigs = ref<Record<string, AppConfigObject>>({})

  const appIds = computed(() => Object.keys(unref(apps)))

  const registerApp = (appInfo: ApplicationInformation) => {
    if (!appInfo.id) {
      return
    }

    if (appInfo.extensions) {
      appInfo.extensions.forEach((extension) => {
        registerFileEditor({ appId: appInfo.id, data: extension })
      })
    }

    unref(apps)[appInfo.id] = {
      applicationMenu: appInfo.applicationMenu || {},
      defaultExtension: appInfo.defaultExtension || '',
      icon: 'check_box_outline_blank',
      name: appInfo.name || appInfo.id,
      ...appInfo
    }
  }

  const registerFileEditor = ({
    appId,
    data
  }: {
    appId: string
    data: ApplicationInformationExtension
  }) => {
    const editor = {
      app: appId,
      extension: data.extension,
      handler: data.handler,
      label: data.label,
      mimeType: data.mimeType,
      routeName: data.routeName,
      hasPriority:
        data.hasPriority ||
        unref(externalAppConfigs)?.[appId]?.priorityExtensions?.includes(data.extension) ||
        false
    } satisfies ApplicationFileEditor

    unref(fileEditors).push(editor)

    if (data.newFileMenu) {
      data.newFileMenu.action = editor
      data.newFileMenu.ext = data.extension
      data.newFileMenu.routes = data.routes
      unref(newFileHandlers).push(data.newFileMenu)
    }
  }

  const loadExternalAppConfig = ({ appId, config }: { appId: string; config: AppConfigObject }) => {
    externalAppConfigs.value = { ...unref(externalAppConfigs), [appId]: config }
  }

  const getExternalAppConfigByAppId = (appId: string) => {
    return unref(externalAppConfigs)[appId] || {}
  }

  return {
    apps,
    appIds,
    fileEditors,
    newFileHandlers,

    registerApp,
    loadExternalAppConfig,
    getExternalAppConfigByAppId
  }
})

export type AppsStore = ReturnType<typeof useAppsStore>
