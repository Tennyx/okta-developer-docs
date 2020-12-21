<template>
  <div class="search--wrapper" >
    <div class="SearchBox" data-search-bar data-pipeline="developer-okta-com">
      <div class="CoveoOmnibox"></div>
      <div class="CoveoAnalytics"></div>
    </div>
    <img class="input--icon" src="/img/icons/search.svg" />
  </div>
</template>

<script>
import { initSearchBar } from "../util/coveo/init";
export default {
  mounted() {
    initSearchBar();
  }
};
</script>
