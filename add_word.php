<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>Add Word</title>
</head>

<body class="container">
    <h1 class="mt-5">Add a Word</h1>
    <?php
    include 'connection.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $word = $_POST["word"];
        $meaning = $_POST["meaning"];

        // Connect to the database (replace these details with your database credentials)
        $conn = new mysqli("localhost", "root", "Shri*111", "language_learning");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Insert the word into the database
        $sql = "INSERT INTO words (word, meaning) VALUES ('$word', '$meaning')";
        $result = $conn->query($sql);

        if ($result === TRUE) {
            echo '<div class="alert alert-success mt-3" role="alert">Word added successfully</div>';
        } else {
            echo '<div class="alert alert-danger mt-3" role="alert">Error: ' . $sql . '<br>' . $conn->error . '</div>';
        }

        // Close the database connection
        $conn->close();
    }
    ?>
    <form action="add_word.php" method="post">
        <div class="form-group">
            <label for="word">Word:</label>
            <input type="text" id="word" name="word" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="meaning">Meaning:</label>
            <input type="text" id="meaning" name="meaning" class="form-control" required>
        </div>

        <button type="submit" class="btn btn-primary">Add Word</button>
    </form>
    <a class="btn btn-secondary mt-3" href="index.html">Go back</a>
    <script>
        // JavaScript to clear textboxes after form submission
        document.getElementById("word").value = "";
        document.getElementById("meaning").value = "";
    </script>
</body>

</html>