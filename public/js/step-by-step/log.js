export default function(step, text) {
  $('main .tutorial [data-log="' + step + '"]').text(text);
}
