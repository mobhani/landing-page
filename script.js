
/*
    Function to start download of resume without opening it in a new tab
    or navigating away from home page.
*/
function startDownload()
{
    var fileUrl = "src/doc/Zain_Mobhani_GTRI_SWE.pdf";
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = "Zain_Mobhani_GTRI_SWE.pdf";
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
}
