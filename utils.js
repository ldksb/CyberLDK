function pdfDownload() {
    let path = "/Collection-of-Dick-Lees-Nonsense.pdf";
    gtag("event", "pdf_download", {
        "pdf_path": path
    });
    location.href = path;
}