import { $api } from '@/api'
import utils from '@/util/utils'
export const sampleService = {
  async getSampleBooks() {
    return await $api.get('/api/sample/v1/books')
  },
  async insertSampleBook(payload) {
    return await $api.post('/api/sample/v1/books', payload)
  },
  async updateSampleBook(payload) {
    return await $api.put(`/api/sample/v1/book/${payload.bookId}`, payload)
  },
  async deleteSampleBook(bookId) {
    return await $api.delete(`/api/sample/v1/book/${bookId}`)
  },
  async getSamplePageBooks(payload) {
    const qs = utils.generateQuerystring(payload)
    return await $api.get(`/api/sample/v1/page/books?${qs}`)
  }
}
