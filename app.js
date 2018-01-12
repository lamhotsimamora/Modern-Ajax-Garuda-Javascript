/**
 * Prepare Logic
 * @type {Function, Object}
 */
let $server_API = "https://reqres.in/api/users/";

function process()
{
	let check = _required(
						$txt_id,$username,$email
				);

	if (check)
	{
		let $result_select = $my_select.getSelected();
			$result_select = JSON.parse($result_select);
			$result_select = $result_select.value;
		
		const $url = $server_API+$txt_id.getValue;
			
			$process = __({
				url:$url,
				method: $result_select,
				data:{
					id:$txt_id.getValue,
					username:$username.getValue,
					email:$email.getValue
				}
			});
			$txt_url.setValue($url);
			$process.request(($a,$b,$c)=>{
				 var data = {
					text:$c.responseText,
					xml:$c.responseXML,
				 	status:$c.status,
				 	state:$c.readyState,
				 	onready:$c.onreadystatechange
				 };
				 $display_json.setContent(
				 				_toJSON(data)
			 				  );
				 $display_method.setContent(
				 				$result_select.toUpperCase()
				 			  );
			});
	}
}
$txt_id.focus();