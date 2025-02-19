import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'
import type { Coincap } from '@/interface/coincap'

export const useCoincapStore = defineStore('coincap', () => {
  const assets = ref<Coincap[]>([])
  const fourAssetsCard = ref<Coincap[]>([])
  const asset = ref<Coincap>()
  const isLoadingTable = ref(false)
  const isLoadingCard = ref(false)

  const getAllAssets = async (limit: number, offset: number) => {
    isLoadingTable.value = true
    try {
      const response = await api.get(
        `https://komgrip.co.th/coincap/assets?limit=${limit}&offset=${offset}`,
      )
      assets.value = response.data.data
      isLoadingTable.value = false
    } catch (error) {
      isLoadingTable.value = false
      return error
    }
  }

  const getFourAssetsCard = async () => {
    try {
      isLoadingCard.value = true
      const response = await api.get('https://komgrip.co.th/coincap/assets?limit=4&offset=0')
      fourAssetsCard.value = response.data.data
      isLoadingCard.value = false
    } catch (error) {
      isLoadingCard.value = false
      return error
    }
  }

  const getOneAsset = async (id: string) => {
    try {
      const response = await api.get(`/assets/${id}`)
      asset.value = response.data.data
    } catch (error) {
      return error
    }
  }

  watch(
    () => isLoadingTable.value,
    () => {
      console.log('isLoadingTable', isLoadingTable.value)
    },
  )

  return {
    assets,
    fourAssetsCard,
    asset,
    getAllAssets,
    getFourAssetsCard,
    getOneAsset,
    isLoadingTable,
    isLoadingCard,
  }
})
