//write a js programme to get the website url (loading page)

function getWebsiteURL() {
  let url = window.location.protocol + "//" + window.location.host;
  return url;
}

let websiteURL = getWebsiteURL();
console.log(websiteURL); 
