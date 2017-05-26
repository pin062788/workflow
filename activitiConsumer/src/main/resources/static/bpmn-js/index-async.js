/**
 * bpmn-js-seed - async
 *
 * This is an example script that loads a bpmn diagram <diagram.bpmn> and opens
 * it using the bpmn-js viewer.
 *
 * YOU NEED TO SERVE THIS FOLDER VIA A WEB SERVER (i.e. Apache) FOR THE EXAMPLE TO WORK.
 * The reason for this is that most modern web browsers do not allow AJAX requests ($.get and the like)
 * of file system resources.
 */
//(function(BpmnViewer, $) {

  // create viewer
  var bpmnViewer = new BpmnJS({
    container: '#canvas'
  });


  // import function
  function importXML(xml) {

    // import diagram
    bpmnViewer.importXML(xml, function(err) {

      if (err) {
        return console.error('could not import BPMN 2.0 diagram', err);
      }

      var canvas = bpmnViewer.get('canvas'),
          overlays = bpmnViewer.get('overlays');


      // zoom to fit full viewport
      canvas.zoom('fit-viewport');

      // attach an overlay to a node
      overlays.add('SCAN_OK', 'note', {
        position: {
          bottom: 0,
          right: 0
        },
        html: '<div class="diagram-note">Mixed up the labels?</div>'
      });

      // add marker
      canvas.addMarker('SCAN_OK', 'needs-discussion');
    });
  }


  // load external diagram file via AJAX and import it
//  $.get('http://localhost:9907/deviceExceptionController/findResource/62513', importXML, 'text');
  function importAjax(url){
	  $.get(url, importXML, 'text');
  }
//  return importAjax;

//})(window.BpmnJS, window.jQuery);