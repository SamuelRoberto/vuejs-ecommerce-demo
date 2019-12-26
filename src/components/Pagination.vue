<template>
  <div class="pagination">
    <nav class="pagination">
      <ul class="pagination__list">
        <li class="pagination__item">
          <a @click="prevPageClick()" class="pagination__link">
            <svg
              class="icon"
              width="8px"
              height="10px"
              viewBox="18 18 8 10"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>Arrow Left</title>
              <polygon
                id="Left-Icon"
                stroke="none"
                fill-rule="evenodd"
                transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
                points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
              />
            </svg>
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link">{{ selectedPage }}</a>
        </li>
        <li class="pagination__item">
          <a @click="nextPageClick()" class="pagination__link">
            <svg
              class="icon"
              width="8px"
              height="10px"
              viewBox="18 18 8 10"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>Arrow Right</title>
              <polygon
                id="Left-Iocn"
                stroke="none"
                fill-rule="evenodd"
                points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { ProductState, Product } from "../store/product/types";
const namespace = "product";

@Component
export default class PaginationComponent extends Vue {
  @Getter("selectedPage", { namespace }) selectedPage: any;
  @Action("prevPage", { namespace }) prevPage: any;
  @Action("nextPage", { namespace }) nextPage: any;
  @Action("getProducts", { namespace }) getProducts: any;

  prevPageClick() {
    this.prevPage();
    this.getProducts();
  }

  nextPageClick() {
    this.nextPage();
    this.getProducts();
  }
}
</script>

<style scoped lang="scss">
/* ==========================================================================
   Pagination
   ========================================================================== */

.pagination {
  height: 45px;
  margin: 30px auto;
  text-align: center;
}

.pagination__list {
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.pagination__item {
  height: 100%;
  width: 45px;
  font-family: "Lato-Bold", sans-serif;
  font-size: 13px;
  letter-spacing: 1.39px;
  text-align: center;
}

.pagination__link {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444a59;
}

.pagination__link:hover {
  text-decoration: underline;
}

.pagination__link .icon {
  width: 8px;
  fill: #444a59;
}
</style>
