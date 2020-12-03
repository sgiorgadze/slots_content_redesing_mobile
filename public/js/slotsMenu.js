document.querySelector(".menu_btn").addEventListener("click", showSlotMenu);
function showSlotMenu() {
    document.querySelector(".sl_tournaments").classList.toggle('active_slMenu');
    document.querySelector(".menu_icon").classList.toggle("icon_close")

}