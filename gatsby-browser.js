let MOBILE_SITE_WIDTH = 1100;

exports.onClientEntry = () => {
  let inner_width = window.innerWidth;
  let current_url = window.location.pathname;
  console.log("favicon",current_url.indexOf("favicon"), inner_width )
  if ((inner_width > MOBILE_SITE_WIDTH) && (current_url.indexOf("dweb") === -1)) {
    window.location.replace("/dweb");
  }
}