/* =========================
   PINDAH HALAMAN
========================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selected =
        document.getElementById(pageId);

    selected.classList.add("active");

}


/* =========================
   MUSIC
========================= */



/* =========================
   ENVELOPE
========================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.toggle("open");

}

/* =================================
   GIFT FLOWER
================================= */

function openFlowerGift() {

    const envelope =
        document.getElementById("giftEnvelope");

    const garden =
        document.getElementById("flowerGarden");

    const title =
        document.getElementById("giftTitle");

    const message =
        document.getElementById("flowerMessage");

    const reset =
        document.getElementById("flowerReset");


    /* sembunyikan judul */

    title.style.opacity = "0";


    /* buka amplop */

    envelope.classList.add("opened");


    /* mulai bunga */

    setTimeout(function() {

        garden.classList.add("active");

    }, 500);


    /* tampilkan pesan */

    setTimeout(function() {

        message.classList.add("active");

    }, 100);


    /* tombol again */

    setTimeout(function() {

        reset.classList.add("active");

    }, 6000);

}


/* =================================
   RESET
================================= */

function resetFlowerGift() {

    const envelope =
        document.getElementById("giftEnvelope");

    const garden =
        document.getElementById("flowerGarden");

    const message =
        document.getElementById("flowerMessage");

    const reset =
        document.getElementById("flowerReset");

    const title =
        document.getElementById("giftTitle");


    envelope.classList.remove("opened");

    garden.classList.remove("active");

    message.classList.remove("active");

    reset.classList.remove("active");

    title.style.opacity = "1";

}