<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Here you can add code to send an email or save the data to a database

    // Send a success response
    http_response_code(200);
    echo "Email sent successfully.";
} else {
    // Return 405 Method Not Allowed for other request methods
    http_response_code(405);
    echo "Method Not Allowed";
}
?>