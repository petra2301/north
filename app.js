const bucketlistTitle = document.querySelector("#bucketlistTitle");
const bucketlistWrapper = document.querySelector(".bucketlistWrapper");
const arrow = document.querySelector("#arrow");

bucketlistTitle.addEventListener("click", openBucketlist);

function openBucketlist() {
    bucketlistWrapper.classList.toggle("closeBucketlist");
    bucketlistWrapper.classList.toggle("openBucketlist");
    arrow.classList.toggle("rotated");
}