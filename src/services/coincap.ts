import api from './api'

const getAllAssets = async () => {
  try {
    const response = await api.get('https://komgrip.co.th/coincap/assets?limit=5&offset=0')
    return response.data.data
  } catch (error) {
    return error
  }
}

const getFourAssetsCard = async () => {
  try {
    const response = await api.get('https://komgrip.co.th/coincap/assets?limit=4&offset=0')
    return response.data.data
  } catch (error) {
    return error
  }
}

const getOneAsset = async (id: string) => {
  try {
    const response = await api.get(`/assets/${id}`)
    return response.data.data
  } catch (error) {
    return error
  }
}

export { getAllAssets, getOneAsset, getFourAssetsCard }
