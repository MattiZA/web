import { computed } from 'vue'
import { AppsStore } from '../piniaStores'

interface AppMetaOptions {
  appsStore: AppsStore
  applicationId: string
}

export function useAppMeta({ appsStore, applicationId }: AppMetaOptions) {
  const applicationMeta = computed(() => {
    const app = appsStore.apps[applicationId]
    if (!app) {
      throw new Error(`useAppConfig: could not find config for applicationId: ${applicationId}`)
    }
    return app || {}
  })

  return {
    applicationMeta
  }
}
