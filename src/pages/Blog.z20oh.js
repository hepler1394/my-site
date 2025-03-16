<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CrimeTimeSnacks</title>
    <style>
        #welcome-message {
            font-size: 24px;
            font-family: Arial, sans-serif;
            white-space: pre;
        }
    </style>
</head>
<body>
    <div id="welcome-message"></div>

    <script>
        // JavaScript to create the typewriter effect
        document.addEventListener("DOMContentLoaded", function() {
            var message = "Welcome to CrimeTimeSnacks...";
            var messageContainer = document.getElementById('welcome-message');
            var index = 0;

            function typeWriter() {
                if (index < message.length) {
                    messageContainer.textContent += message.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100); // Adjust typing speed here
                }
            }

            typeWriter();
        });
    </script>
</body>
</html>
