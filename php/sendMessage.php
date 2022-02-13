<?php
$to = "office@smartfireblock.rs";
$subject = "Nova poruka od" . $_POST['name'];
$headers = "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers.= "From: " . $email;
$msg = "<html>";
$msg.= "<head>";
$msg.= "<title>Mail</title>";
$msg.= "<meta charset=\"utf-8\"";
$msg.= "</head>";
$msg.= '<body style="font-family: arial">';
$msg.= "<div style='background-color: white; padding: 20px; color: #434343'>";
$msg.= "<h3 style='text-align: left'>Nova poruka od" . $_POST['name'] . "</h3>";
$msg.= '<p style="text-align: left;>' . $_POST['message'] . '</p>';
$msg.= "</div>";
$msg.= "</body>";
$msg.= "</html>";

if(mail($to, $subject, $msg, $headers)){
    if($_POST['lang'] == "sr") {
        echo '<div class="modal-header p-4">
        <h5 class="modal-title">Uspeh!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
        <div class="text-start"><p>Vaša poruka je uspešno poslata. Očekujte odgovor u najkraćem mogućem roku.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Izađi</button>
        </div>';
    }
    else {
        echo '<div class="modal-header p-4">
        <h5 class="modal-title">Success!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
        <div class="text-start"><p>Your message was successfully sent. Expect an answer as soon as possible.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>';
    }
}
else{
    if($_POST['lang'] == "sr") {
        echo '<div class="modal-header p-4">
        <h5 class="modal-title">Greška.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
        <div class="text-start"><p>Došlo je do greške prilikom slanja poruke. Pokušajte kasnije ili nas kontaktirajte na office@smartfireblock.rs</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Izađi</button>
        </div>';
    }
    else {
        echo '<div class="modal-header p-4">
        <h5 class="modal-title">Error.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
        <div class="text-start"><p>An error occured while trying to send your message. Try again later or contact us at office@smartfireblock.rs</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>';
    }
}
?>