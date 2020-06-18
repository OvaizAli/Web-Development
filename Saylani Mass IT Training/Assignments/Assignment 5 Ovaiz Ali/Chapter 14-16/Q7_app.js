/* Declare and Initialize an array and store available
education qualifications in Pakistan(e.g.SSC, HSC, BCS,
    BS, BCOM, MS, M.Phil., PhD).Show the listed
qualifications in your browser */
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"],
    i;
document.writeln("Qualifications<br><br>".bold());
for (i = 0; i < 8; i++) {
    document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
}