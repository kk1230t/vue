import { $api } from '@/api'
export const authService = {
  async postCmCognitoIssue(payload) {
    return await $api.post(`/public/sample/v1/cognito/issue`, payload)
  }
}
