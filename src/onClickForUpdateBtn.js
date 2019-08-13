export default function onClickForUpdateBtn() {
    let acc = document.getElementsByClassName("content-area_twits_twits-list-area_update-button");
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
                this.classList.toggle("active");
        }
    }
}
