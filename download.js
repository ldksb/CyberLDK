function onDownload() {
    let path = "/Collection-of-Dick-Lees-Nonsense.pdf";
    gtag("event", "pdf_load", {
        "pdf_path": path
    });
    location.href = path;
}