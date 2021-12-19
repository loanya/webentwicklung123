<?php
header("Content-Type: application/json");

$users = [
    [
        "name" => "eins",
        "pw" => "pw1"
    ]
];
echo json_encode($users, JSON_PRETTY_PRINT);