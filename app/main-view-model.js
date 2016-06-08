var Observable = require("data/observable").Observable;
var barcodescanner = require("nativescript-barcodescanner");

function createViewModel() {
    var viewModel = new Observable();
    viewModel.onTap = function() {
        var that = this;
        barcodescanner.scan({
        formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types 
        cancelLabel: "Stop scanning", // iOS only, default 'Close' 
        message: "Go scan something", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.' 
        preferFrontCamera: false,     // Android only, default false 
        showFlipCameraButton: true,   // Android only, default false (on iOS it's always available) 
        orientation: "landscape"      // Android only, optionally lock the orientation to either "portrait" or "landscape" 
      }).then(
          function(result) {

            console.log("Scan format: " + result.format);
            console.log("Scan text:   " + result.text);
            that.set("message", "Scan text:   " + result.text + " Scan format: " + result.format);
          },
          function(error) {
            console.log("No scan: " + error);
            that.set("message", "No scan: " + error);
          }
      )

    }

    return viewModel;
}

exports.createViewModel = createViewModel;