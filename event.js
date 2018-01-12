/**
 * Prepare All Event
 */
$btn_test.when("click",$=>{
  process();
});

function enterGo(e){
  if (e.keyCode==13)
  {
    process();
  }
}