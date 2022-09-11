const nodemailer = require("nodemailer");
//const nodemailerSendgrid = require("nodemailer-sendgrid-transport");

const html=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>Promo</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover div {
font-size:0;
}
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:inline-block!important;
}
#outlook a {
padding:0;
}
*.es-hover a:hover {
color:#6601ff!important;
}
.ExternalClass {
width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height:100%;
}
.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
background:#010101!important;
border-color:#010101!important;
color:#ffffff!important;
}
.es-button-border:hover {
background:#010101!important;
border-color:#5100cc #5100cc #5100cc #5100cc!important;
}
[data-ogsb] .es-button {
border-width:0!important;
padding:10px 20px 10px 20px!important;
}
td .es-button-border:hover a.es-button-1 {
background:#6601ff!important;
border-color:#6601ff!important;
}
td .es-button-border-2:hover {
border-color:#e5e5e5 #e5e5e5 #e5e5e5 #e5e5e5!important;
background:#6601ff!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:24px!important; text-align:center } h2 { font-size:20px!important; text-align:center } h3 { font-size:18px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:24px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:10px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:13px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
</head>
<body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#f6f6f6"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0">
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" bgcolor="#010101" style="padding:0;Margin:0;background-color:#010101">
<table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px" bgcolor="#010101">
<tr style="border-collapse:collapse">
<td class="es-m-p0t es-m-p0b es-m-p10r es-m-p10l" align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;position:relative"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CE0A39;font-size:13px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/bannerImgGuid/images/image16619989008558511.png" alt title width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p0t es-m-p0b es-m-p0r es-m-p0l" align="left" bgcolor="#6601ff" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#6601ff">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" class="es-m-p15t es-m-p15b es-m-p10r es-m-p10l" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#ffffff">WELCOME</h2></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p20t es-m-p20b es-m-p30r es-m-p30l" align="left" style="padding:0;Margin:0;padding-top:30px;padding-bottom:30px"><!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:207px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:187px">
<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#6601ff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #6601ff;border-right:1px solid #6601ff;border-top:1px solid #6601ff;border-bottom:1px solid #6601ff;background-color:#6601ff;border-radius:5px" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#ffffff;font-size:16px"><strong>#1</strong></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">FREE SHIPPING</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0px"><img src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/56761597821822887.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="110"></td>
</tr>
</table></td>
<td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
</tr>
</table><!--[if mso]></td><td style="width:187px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:187px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #ffffff;border-right:1px solid #ffffff;border-top:1px solid #ffffff;border-bottom:1px solid #ffffff;border-radius:5px" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#ffffff;font-size:16px"><strong>#2</strong></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">BIG CHOICE</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0px"><img src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/92941597763653300.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="110"></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:186px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:186px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #ffffff;border-right:1px solid #ffffff;border-top:1px solid #ffffff;border-bottom:1px solid #ffffff;border-radius:5px" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#ffffff;font-size:16px"><strong>#3</strong></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">24/7 SUPPORT</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0px"><img src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/13291597763308352.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="110"></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p20t es-m-p10b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px"><!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/58111597827346945.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">SNEAKERS "A-7732"</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#6601ff" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#ffffff;font-size:13px"><br></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">$ 55.80</h3></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/59131597826814023.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">SNEAKERS "B-7932"</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#6601ff" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#ffffff;font-size:13px"><br></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">$ 65.90</h3></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p10t es-m-p30b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/96241597828023099.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">SNEAKERS "CB-7732"</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">$ 58.70</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#6601ff" style="Margin:0;padding-top:5px;padding-bottom:15px;padding-left:15px;padding-right:15px"><!--[if mso]><a href="https://viewstripo.email/" target="_blank">
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email/"
style="height:41px;v-text-anchor:middle;width:135px;" arcsize="10%" strokecolor="#ffffff" fillcolor="#ffffff">
<w:anchorlock></w:anchorlock>
<center style='color:#6601ff;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:14px;font-weight:700;'>LEARN MORE</center>
</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border es-button-border-2" style="border-style:solid;border-color:#ffffff;background:#ffffff;border-width:2px;display:inline-block;border-radius:4px;width:auto;mso-hide:all"><a href="https://viewstripo.email/" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#6601ff;font-size:14px;border-style:solid;border-color:#ffffff;border-width:10px 20px 10px 20px;display:inline-block;background:#ffffff;border-radius:4px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">LEARN MORE</a></span><!--<![endif]--></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/86211597824559559.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">SNEAKERS "BG-87732"</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">$ 34.80</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#6601ff" style="Margin:0;padding-top:5px;padding-bottom:15px;padding-left:15px;padding-right:15px"><!--[if mso]><a href="https://viewstripo.email/" target="_blank">
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email/"
style="height:41px;v-text-anchor:middle;width:135px;" arcsize="10%" strokecolor="#ffffff" fillcolor="#ffffff">
<w:anchorlock></w:anchorlock>
<center style='color:#6601ff;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:14px;font-weight:700;'>LEARN MORE</center>
</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border es-button-border-2" style="border-style:solid;border-color:#ffffff;background:#ffffff;border-width:2px;display:inline-block;border-radius:4px;width:auto;mso-hide:all"><a href="https://viewstripo.email/" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#6601ff;font-size:14px;border-style:solid;border-color:#ffffff;border-width:10px 20px 10px 20px;display:inline-block;background:#ffffff;border-radius:4px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">LEARN MORE</a></span><!--<![endif]--></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p0t es-m-p15b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-bottom:20px"><!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr class="es-mobile-hidden" style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/60911597845836120.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/21651597850343252.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">SNEAKERS "CG-99732"</h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" bgcolor="#6601ff" style="padding:0;Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">$ 94.70</h3></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p10t es-m-p30b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:35px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:600px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/74631597823629033.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:20px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#ffffff">MANAGE TO ORDER WITH A DISCOUNT</h2></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" bgcolor="#010101" style="padding:0;Margin:0;background-color:#010101">
<table bgcolor="#010101" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
<tr style="border-collapse:collapse">
<td class="es-m-p0t es-m-p0b es-m-p0r es-m-p0l" align="left" bgcolor="#6601ff" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#6601ff">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" class="es-m-p15t es-m-p15b es-m-p10r es-m-p10l" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#ffffff">LATEST TOURNAMENT NEWS</h2></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-p20t es-m-p20b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:30px"><!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/52431597841711334.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" class="es-m-txt-c es-hover" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:20px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:17px;font-style:normal;font-weight:bold;color:#ffffff"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:17px" href="https://viewstripo.email/">Meet the new collection of rugby balls</a></h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" class="es-m-txt-c" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#cccccc;font-size:13px">Aug 04, 2021</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:20px"></td><td style="width:290px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:290px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/69171597841833390.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="290"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" class="es-m-txt-c es-hover" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:20px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:17px;font-style:normal;font-weight:bold;color:#ffffff"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:17px" href="https://viewstripo.email/">Meet the new collection of sports shoes</a></h3></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#cccccc;font-size:13px">Aug 04, 2021</p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td class="esdev-adapt-off es-m-p5t es-m-p15b es-m-p10r es-m-p10l" align="left" style="padding:0;Margin:0;padding-bottom:20px">
<table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px">
<tr style="border-collapse:collapse">
<td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:135px">
<table class="es-hover-b" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" class="rollover" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CE0A39;font-size:13px"><img class="adapt-img rollover-first" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/23961597759751784.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="115">
<div style="font-size:0;mso-hide:all">
<img width="115" class="adapt-img rollover-second" style="display:none;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/46661597761226583.png" alt>
</div></a></td>
</tr>
</table></td>
<td style="padding:0;Margin:0;width:20px"></td>
</tr>
</table></td>
<td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:135px">
<table class="es-hover-b" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" class="rollover" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CE0A39;font-size:13px"><img class="adapt-img rollover-first" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/10031597759840420.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="115">
<div style="font-size:0;mso-hide:all">
<img width="115" class="adapt-img rollover-second" style="display:none;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/15941597761267264.png" alt>
</div></a></td>
</tr>
</table></td>
<td style="padding:0;Margin:0;width:20px"></td>
</tr>
</table></td>
<td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:135px">
<table class="es-hover-b" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" class="rollover" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CE0A39;font-size:13px"><img class="adapt-img rollover-first" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/46041597759970659.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="115">
<div style="font-size:0;mso-hide:all">
<img width="115" class="adapt-img rollover-second" style="display:none;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/69581597761365180.png" alt>
</div></a></td>
</tr>
</table></td>
<td style="padding:0;Margin:0;width:20px"></td>
</tr>
</table></td>
<td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:135px">
<table class="es-hover-b" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" class="rollover" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CE0A39;font-size:13px"><img class="adapt-img rollover-first" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/63761597760088219.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="115">
<div style="font-size:0;mso-hide:all">
<img width="115" class="adapt-img rollover-second" style="display:none;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px" src="https://wyganw.stripocdn.email/content/guids/CABINET_372bae99fe43e67ed8e1ca5744d1f9a3/images/34331597761371046.png" alt>
</div></a></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#010101;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td align="center" bgcolor="#6601ff" style="padding:0;Margin:0;background-color:#6601ff">
<table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td esdev-links-color="#666666" align="center" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#ffffff;font-size:12px">You are receiving this email because you have visited our site or asked us about regular newsletter. If you would not like to receive this email <strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px" class="unsubscribe" href="https://viewstripo.email/">unsubscribe here</a></strong>.</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>`;
const createTransport = () => {
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "henrypfg11@gmail.com",
          pass: "chirxatvtficaopa",
        },
        tls: {
            rejectUnauthorized: false
          }
        
      });
return transport;
}
const sendEmail=async(data)=>{
    const {email,name,clave}=data;
    const transport = createTransport();
    const info=await transport.sendMail({
        from:"athenssoport@gmail.com",
        to:email ,
        subject:"Welcome to our website",
        text:"Welcome to our website",
        html:html
    });
    console.log("Message sent: %s", info.messageId);

     return
}

const emailOlvidePassword=async(data)=>{
    const {email,name,clave,id}=data;
    const transport = createTransport();
    const info=await transport.sendMail({
        from:"khuazad9612@gmail.com",
        to:email ,
        subject:"Welcome to our website",
        text:"Welcome to our website",
        html: 
        `<p>Hola :  You have requested a new password.
        Access the following link to restore it.
        Please enter this code and a new password.${clave}  </p>
        <p> Sigue el siguiente enlace para generar un nuevo password: 
            <a href="http://localhost:3000/token">Reestablecer Password</a>
        </p>
        `,
    });
    console.log("Message sent: %s", info.messageId);

     return
}
exports.sendEmail=()=>sendEmail();
exports.emailOlvidePassword=()=>emailOlvidePassword();



module.exports = { sendEmail,emailOlvidePassword};


// const emailRegistro = async (data) => {
// //   console.log(`Data`, data);
//   const { name, email, token } = data;

//   const transport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "henrypfg11@gmail.com",
//       pass: "chirxatvtficaopa",
//     },
//   });

//   const info = await transport.sendMail({
//     from: "PRO-ROPA - E-commerce",
//     to: email,
//     subject: "PRO-ROPA - Comprueba tu cuenta",
//     text: "Comprueba tu cuenta en PRO-ROPA",
//     html: `<p>Hola : ${name}, Comprueba tu cuenta de PRO-ROPA</p>
//     <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace: 
//         <a href="http://localhost:3000/confirmar/${token}">Confirmar cuenta</a>
//     </p>
//     `,
//   });
// };

// const emailOlvidePassword = async (data) => {
//   //   console.log(`Data`, data);
//     const { name, email, token } = data;
  
//     const transport = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "henrypfg11@gmail.com",
//         pass: "chirxatvtficaopa",
//       },
//     });
  
//     const info = await transport.sendMail({
//       from: "PRO-ROPA - E-commerce",
//       to: email,
//       subject: "PRO-ROPA - Reestablece tu Password",
//       text: "Comprueba tu cuenta en Meli-Ropa",
//       html: `<p>Hola : ${name}, has solicitado reestablecer tu password en PRO-ROPA</p>
//       <p> Sigue el siguiente enlace para generar un nuevo password: 
//           <a href="http://localhost:3000/olvide-password/${token}">Reestablecer Password</a>
//       </p>
//       `,
//     });
//   };

// module.exports = { emailRegistro, emailOlvidePassword };
