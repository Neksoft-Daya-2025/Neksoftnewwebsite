<?php
// Fixed loopback upstream. Application code and credentials live outside public_html.
$uri = $_SERVER['REQUEST_URI'];
if (preg_match('/[\r\n]/', $uri)) { http_response_code(400); exit; }
$ch = curl_init('http://localhost' . $uri);
curl_setopt($ch, CURLOPT_UNIX_SOCKET_PATH, '/home/u968429559/neksoft-node/backend.sock');
$headers = [];
foreach (getallheaders() as $name => $value) {
 if (!in_array(strtolower($name), ['host','connection','content-length','transfer-encoding','x-forwarded-for'])) $headers[] = $name . ': ' . $value;
}
$headers[] = 'X-Forwarded-For: ' . $_SERVER['REMOTE_ADDR'];
curl_setopt_array($ch, [CURLOPT_CUSTOMREQUEST=>$_SERVER['REQUEST_METHOD'],CURLOPT_HTTPHEADER=>$headers,CURLOPT_RETURNTRANSFER=>true,CURLOPT_CONNECTTIMEOUT=>5,CURLOPT_TIMEOUT=>200,CURLOPT_FOLLOWLOCATION=>false,CURLOPT_HEADERFUNCTION=>function($ch,$line){$len=strlen($line);if(preg_match('/^HTTP\/\S+\s+(\d+)/',$line,$m)){http_response_code((int)$m[1]);}elseif(strpos($line,':')!==false){$name=strtolower(trim(explode(':',$line,2)[0]));if(!in_array($name,['connection','transfer-encoding','keep-alive','content-length']))header(trim($line),false);}return $len;}]);
if (!in_array($_SERVER['REQUEST_METHOD'],['GET','HEAD'])) curl_setopt($ch,CURLOPT_POSTFIELDS,file_get_contents('php://input'));
$result=curl_exec($ch);
if ($result===false){http_response_code(503);header('Content-Type: application/json');echo '{"error":"Website service is temporarily unavailable. Please retry shortly."}';}else echo $result;
curl_close($ch);
