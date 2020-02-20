/* Timer */

function startTimer(duration,display) {
  var timer = duration; minutes; seconds;
  setInterval(function() {
    minutes = parseInt(timer/60,10);
    seconds = parseInt(timer%60,10);
    minutes = minutes<10?"0"+minutes:minutes;seconds=seconds<10?"0"+seconds:seconds;
    display.textContent=minutes+":"+seconds;
  if(--timer < 0 ) {
    timer=duration;
  }
 } ,1000);
}

window.onload=function() {
var fiveMinutes = 60*5,
display = document.querySelector('#stopwatch');
startTimer(fiveMinutes,display);
};

/* Country state */
<script type="text/javascript">
  $(document).ready(function () {
    initializeCountryState('country', 'state', 'state-container', 'zip-code', 'class="form-control" data-toggle="tooltip" data-placement="auto left" title="State" data-validation="required"',false);
    $('#country').val("CY").change()

          $('#terms-privacy-modal').on('show.bs.modal', function (event) {
              var button = $(event.relatedTarget);
              $(this).find('.modal-body').load(button.data('modal-source'));
              $('#terms-privacy-modal-title').text(button.data('modal-title'));
          });

      });
</script>
