(function () {
  window.addEventListener("load", () => {
    const load_more_btn = document.getElementById("load_more");

    if (load_more_btn) {
      load_more_btn.addEventListener("click", function () {
        const page_num = load_more_btn.getAttribute("data-page");
        const per_page = load_more_btn.getAttribute("data-per-page");
        const post_type = load_more_btn.getAttribute("data-post-type");
        const filter_key = load_more_btn.getAttribute("data-filter-key");
        const filter_value = load_more_btn.getAttribute("data-filter-value");
        handleLoadMoreClick(
          page_num,
          load_more_btn,
          per_page,
          post_type,
          filter_key,
          filter_value
        );
      });
    }
  });
})();

function handleLoadMoreClick(
  page_num,
  button,
  per_page,
  post_type,
  filter_key,
  filter_value
) {
  if (!page_num) {
    return;
  }

  const ideas = document.getElementById("query-wrapper");

  button.setAttribute("data-page", parseInt(page_num) + 1);
  const pagination_wrapper = document.getElementById("pagination-wrapper");
  const post_pagination = document.getElementById("post-pagination");

  getPosts(page_num, per_page, post_type, filter_key, filter_value)
    .then((response) => {
      return response.text();
    })
    .then((posts) => {
      if (0 === parseInt(posts)) {
        button.remove();
      } else {
        post_pagination.remove();
        const cleanPosts = posts.slice(0, -1);
        ideas.innerHTML += cleanPosts;
        removeLoadMoreIfOnLastPage(
          parseInt(page_num) + 1,
          pagination_wrapper,
          button
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function removeLoadMoreIfOnLastPage(
  nextPage,
  pagination_wrapper,
  load_more_btn
) {
  const pagination = document.getElementById("post-pagination");
  const totalPagesCount = pagination.getAttribute("data-max-pages");
  if (nextPage + 1 > totalPagesCount) {
    pagination_wrapper.remove();
    load_more_btn.removeEventListener("click", () => null);
    load_more_btn.remove();
  }
}

function getPosts(
  requested_page,
  per_page,
  post_type,
  filter_key,
  filter_value
) {
  const ajaxURL = siteConfig?.ajaxURL;
  const ajaxNonce = siteConfig?.ajax_nonce;

  const data = new FormData();

  data.append("action", "load_more");
  data.append("ajax_nonce", ajaxNonce);
  data.append("page", requested_page);
  data.append("per_page", per_page);
  data.append("post_type", post_type);
  if (filter_key !== null && filter_value !== null) {
    data.append("filter_key", filter_key);
    data.append("filter_value", filter_value);
  }

  const response = fetch(ajaxURL, {
    method: "POST",
    headers: { Accept: "text/html" },

    credentials: "same-origin",

    body: data,
  });

  return response;
}
