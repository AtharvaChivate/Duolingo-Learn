<?php
// Connect to the database (replace these details with your database credentials)
$conn = new mysqli("localhost", "root", "Shri*111", "language_learning");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle deletion when the Delete button is clicked
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete_id"])) {
    $delete_id = $_POST["delete_id"];

    // Delete the word from the database
    $delete_sql = "DELETE FROM words WHERE id = $delete_id";
    $delete_result = $conn->query($delete_sql);

    if ($delete_result === TRUE) {
        $deletion_status = '<div class="alert alert-success mt-3" role="alert">Word deleted successfully</div>';
    } else {
        $deletion_status = '<div class="alert alert-danger mt-3" role="alert">Error deleting word: ' . $conn->error . '</div>';
    }
}

// Retrieve all words from the database
$sql = "SELECT * FROM words";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>View Words</title>
</head>
<body class="container">
    <h1 class="mt-5">Words Learned to Date</h1>
    <?php
    // Display deletion status message
    if (isset($deletion_status)) {
        echo $deletion_status;
    }
    ?>
    <table class="table mt-3">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Word</th>
                <th>Meaning</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Display words in a tabular form with delete buttons
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['id']}</td>
                        <td>{$row['word']}</td>
                        <td>{$row['meaning']}</td>
                        <td>
                            <form action=\"view_words.php\" method=\"post\">
                                <input type=\"hidden\" name=\"delete_id\" value=\"{$row['id']}\">
                                <button type=\"submit\" class=\"btn btn-danger btn-sm\">Delete</button>
                            </form>
                        </td>
                      </tr>";
            }
            ?>
        </tbody>
    </table>
    <a class="btn btn-secondary mt-3" href="index.html">Go back</a>
</body>
</html>

<?php
$conn->close();
?>
