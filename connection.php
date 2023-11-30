<?php
$conn = new mysqli("localhost", "root", "", "language_learning");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    