<?php

// USE SMTP OR mail()
// SMTP is recommended, mail() is disabled on most shared hosting servers.
// IF false : SMTP host/port/user/pass/ssl not used, leave empty or as it is!
$config['use_smtp']				= true;						// true|false

// SMTP Server Settings
$config['smtp_host'] 			= 'smtp.naver.com';   // eg.: smtp.mandrillapp.com
$config['smtp_port'] 			= 465;						// eg.: 587
$config['smtp_user'] 			= 'y_jyejye@naver.com'; 			// you@gmail.com
$config['smtp_pass'] 			= 'ccomjy8211';				// password
$config['smtp_ssl']				= true;						// true for google (port 465), false for others

// Who receive all emails?
$config['send_to']				= 'y_jyejye@naver.com';			// destination of all emails sent throught contact form

// Email Subject
$config['subject']				= '홈페이지 통해 메일드립니다.';	// subject of emails you receive
?>