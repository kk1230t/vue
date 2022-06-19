<template>
  <div>
    <div>
      <nuxt-link to="/login">
        로그인페이지
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/common">
        공통페이지
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/guide">
        마크업 guide | work-list
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/sample">
        샘플페이지
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/certification">
        인증 관련 페이지
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/product-application">
        감액/특약해약 신청(목록조회, 상세조회, 보험료계산)
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          active: false,
          name: 'name1'
        },
        {
          active: false,
          name: 'name2'
        },
        {
          active: false,
          name: 'name3'
        }
      ]
    }
  },
  mounted() {}
}
</script>

<style lang="scss"></style>
